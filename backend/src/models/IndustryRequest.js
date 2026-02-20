const mongoose = require("mongoose");

const IndustryRequestSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    contactName: { type: String, required: true },
    email: { type: String, required: true },
    sector: { type: String, required: true },
    problemDescription: { type: String, required: true },
    timeline: { type: String, required: true },
    ndaRequired: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["New", "Reviewed", "Shortlisted", "Introduced", "Closed"],
      default: "New",
    },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("IndustryRequest", IndustryRequestSchema);
