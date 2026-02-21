const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const { Resend } = require("resend");
const IndustryRequest = require("../models/IndustryRequest");
const Researcher = require("../models/Researcher");
const ContactMessage = require("../models/ContactMessage");
const { validateEmail, validateRequired } = require("../middleware/validation");

// POST /api/facilitation/submit-requirement
// Industry submits technical requirement
router.post("/submit-requirement", async (req, res) => {
  try {
    const { companyName, contactName, email, sector, problemDescription, timeline, ndaRequired } = req.body;

    // Validation
    if (!validateRequired([companyName, contactName, email, sector, problemDescription, timeline])) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const request = new IndustryRequest({
      companyName,
      contactName,
      email,
      sector,
      problemDescription,
      timeline,
      ndaRequired: ndaRequired || false,
    });

    await request.save();
    res.status(201).json({ message: "Requirement submitted successfully", id: request._id });
  } catch (err) {
    console.error("Error submitting requirement:", err);
    res.status(500).json({ error: "Failed to submit requirement" });
  }
});

// POST /api/facilitation/register-researcher
// Researcher registers for opportunities
router.post("/register-researcher", async (req, res) => {
  try {
    const { name, institution, email, expertise, availability, ndaWilling } = req.body;

    // Validation
    if (!validateRequired([name, institution, email, availability])) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }
    if (!Array.isArray(expertise) || expertise.length === 0) {
      return res.status(400).json({ error: "Expertise must be a non-empty array" });
    }

    // Check if researcher already exists
    const existingResearcher = await Researcher.findOne({ email });
    if (existingResearcher) {
      return res.status(409).json({ error: "Researcher already registered with this email" });
    }

    const researcher = new Researcher({
      name,
      institution,
      email,
      expertise,
      availability,
      ndaWilling: ndaWilling || false,
    });

    await researcher.save();
    res.status(201).json({ message: "Researcher registered successfully", id: researcher._id });
  } catch (err) {
    console.error("Error registering researcher:", err);
    res.status(500).json({ error: "Failed to register researcher" });
  }
});

// Limits for contact form (prevent abuse and oversized payloads)
const CONTACT_LIMITS = {
  name: 200,
  email: 320,
  message: 10000,
};

// Escape HTML for safe inclusion in email body
function escapeHtml(text) {
  if (typeof text !== "string") return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// GET /api/facilitation/contact-email-status
// Lets you verify email env is set on the server (e.g. on Render). No secrets returned.
router.get("/contact-email-status", (req, res) => {
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_API_KEY.trim());
  const hasUser = Boolean(process.env.EMAIL_USER && process.env.EMAIL_USER.trim());
  const hasPass = Boolean(process.env.EMAIL_PASS && process.env.EMAIL_PASS.trim());
  const smtpConfigured = hasUser && hasPass;
  res.json({
    emailConfigured: hasResend || smtpConfigured,
    emailMethod: hasResend ? "resend" : smtpConfigured ? "smtp" : "none",
    notificationEmail: process.env.CONTACT_NOTIFICATION_EMAIL || "amansurana5454@gmail.com",
  });
});

// POST /api/facilitation/contact
// Saves to MongoDB first, then sends email notification. Message is never lost.
router.post("/contact", async (req, res) => {
  let savedId = null;

  try {
    const raw = req.body || {};
    const name = typeof raw.name === "string" ? raw.name.trim() : "";
    const email = typeof raw.email === "string" ? raw.email.trim() : "";
    const message = typeof raw.message === "string" ? raw.message.trim() : "";

    // Validation
    if (!validateRequired([name, email, message])) {
      return res.status(400).json({ error: "All fields are required." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Please enter a valid email address." });
    }
    if (name.length > CONTACT_LIMITS.name) {
      return res.status(400).json({ error: `Name must be at most ${CONTACT_LIMITS.name} characters.` });
    }
    if (email.length > CONTACT_LIMITS.email) {
      return res.status(400).json({ error: "Email address is too long." });
    }
    if (message.length > CONTACT_LIMITS.message) {
      return res.status(400).json({ error: `Message must be at most ${CONTACT_LIMITS.message} characters.` });
    }

    // 1. Always save to MongoDB first (message is never lost)
    const contactMessage = new ContactMessage({ name, email, message });
    await contactMessage.save();
    savedId = contactMessage._id;

    // 2. Send email notification (best-effort; do not fail the request)
    const notificationTo = (process.env.CONTACT_NOTIFICATION_EMAIL || "amansurana5454@gmail.com").trim();
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h3 style="color: #0F172A;">New Contact Submission</h3>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 1.5rem 0;">
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap; background: #F8FAFC; padding: 1rem; border-radius: 4px;">${safeMessage}</p>
        <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 1.5rem 0;">
        <p style="font-size: 0.9rem; color: #666;">
          <em>This message was submitted via the lab2market contact form. ID: ${savedId}</em>
        </p>
      </div>
    `;
    let emailSent = false;

    // Prefer Resend (HTTPS API) — works on Render; SMTP is often blocked on free tier
    const resendKey = (process.env.RESEND_API_KEY || "").trim();
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        const fromAddress = (process.env.RESEND_FROM || "Lab2Market Contact <onboarding@resend.dev>").trim();
        console.log("Contact form: sending via Resend to", notificationTo);
        const { error } = await resend.emails.send({
          from: fromAddress,
          to: [notificationTo],
          replyTo: email,
          subject: "New Contact Submission from lab2market",
          html: htmlBody,
        });
        if (error) throw new Error(error.message);
        emailSent = true;
        console.log("Contact form: email sent successfully via Resend to", notificationTo);
      } catch (mailErr) {
        console.error("Contact form: Resend failed (message was saved).", mailErr.message);
      }
    } else {
      // Fallback: Gmail SMTP (works locally; often blocked on Render free tier)
      const emailUser = (process.env.EMAIL_USER || "").trim();
      const emailPass = (process.env.EMAIL_PASS || "").trim().replace(/\s/g, "");
      if (emailUser && emailPass) {
        try {
          const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: { user: emailUser, pass: emailPass },
            tls: { rejectUnauthorized: true },
          });
          console.log("Contact form: sending via SMTP to", notificationTo);
          await transporter.sendMail({
            from: `"Lab2Market Contact" <${emailUser}>`,
            to: notificationTo,
            replyTo: email,
            subject: "New Contact Submission from lab2market",
            html: htmlBody,
          });
          emailSent = true;
          console.log("Contact form: email sent successfully via SMTP to", notificationTo);
        } catch (mailErr) {
          console.error("Contact form: SMTP failed (message was saved). Code:", mailErr.code, "Message:", mailErr.message);
          if (mailErr.code === "EAUTH" || mailErr.responseCode === 535) {
            console.error("Use a Gmail App Password: https://myaccount.google.com/apppasswords");
          }
          if (mailErr.code === "ECONNREFUSED" || mailErr.code === "ETIMEDOUT" || mailErr.code === "ENETUNREACH") {
            console.error("SMTP blocked on this host. Set RESEND_API_KEY to use Resend (HTTPS) instead.");
          }
        }
      } else {
        console.warn("Contact form: No RESEND_API_KEY or EMAIL_USER/EMAIL_PASS. Message saved to DB; no email.");
      }
    }

    return res.status(201).json({
      success: true,
      emailSent,
      message: "Message received successfully. We'll be in touch soon.",
      id: String(savedId),
    });
  } catch (err) {
    console.error("Error saving contact message:", err);
    // Only DB or validation issues reach here; email failures are caught above
    if (err.name === "ValidationError") {
      return res.status(400).json({ error: err.message || "Invalid data." });
    }
    if (err.code === 11000) {
      return res.status(409).json({ error: "A similar message was already submitted." });
    }
    return res.status(500).json({
      error: "We couldn't save your message right now. Please try again or email us directly.",
    });
  }
});

module.exports = router;
