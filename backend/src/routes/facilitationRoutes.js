const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
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

// POST /api/facilitation/contact
// General contact form submission with email notification
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!validateRequired([name, email, message])) {
      return res.status(400).json({ error: "All fields are required" });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // 1. Save to MongoDB
    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    });
    await contactMessage.save();

    // 2. Email notification – require env so we fail fast with a clear log
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const notificationTo = process.env.CONTACT_NOTIFICATION_EMAIL || "amansurana5454@gmail.com";

    if (!emailUser || !emailPass) {
      console.error(
        "Contact form: email not configured. Set EMAIL_USER and EMAIL_PASS in backend .env (use Gmail App Password). Message was saved to DB."
      );
      return res.status(500).json({
        error: "Email delivery is not configured. Your message was saved; we will follow up.",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    const mailOptions = {
      from: `"Lab2Market Contact" <${emailUser}>`,
      to: notificationTo,
      subject: "New Contact Submission from lab2market",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h3 style="color: #0F172A;">New Contact Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 1.5rem 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #F8FAFC; padding: 1rem; border-radius: 4px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #E2E8F0; margin: 1.5rem 0;">
          <p style="font-size: 0.9rem; color: #666;">
            <em>This message was submitted via the lab2market contact form.</em>
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ success: true, message: "Message received successfully. We'll be in touch soon." });
  } catch (err) {
    console.error("Error submitting contact message:", err);
    if (err.code === "EAUTH" || err.responseCode === 535) {
      console.error(
        "Gmail auth failed: use an App Password (not your normal password). See https://myaccount.google.com/apppasswords"
      );
    }
    res.status(500).json({ error: "Failed to submit message. Please try again." });
  }
});

module.exports = router;
