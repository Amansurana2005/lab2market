const express = require("express");
const router = express.Router();
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
// General contact form submission
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

    const contactMessage = new ContactMessage({
      name,
      email,
      message,
    });

    await contactMessage.save();
    res.status(201).json({ message: "Message received successfully" });
  } catch (err) {
    console.error("Error submitting contact message:", err);
    res.status(500).json({ error: "Failed to submit message" });
  }
});

module.exports = router;
