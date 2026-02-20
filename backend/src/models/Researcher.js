const mongoose = require("mongoose");

const ResearcherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    institution: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    expertise: { type: [String], required: true },
    availability: { type: String, required: true },
    ndaWilling: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Inactive"],
      default: "Pending",
    },
    registeredAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Researcher", ResearcherSchema);
