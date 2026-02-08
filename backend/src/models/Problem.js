const mongoose = require("mongoose");

const ProblemSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    sector: String,
    location: String,
    contactInfo: String,
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: { type: String, default: "open" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Problem", ProblemSchema);
