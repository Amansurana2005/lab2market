const Problem = require("../models/Problem");

exports.createProblem = async (req, res) => {
  try {
    const problem = await Problem.create({
      ...req.body,
      createdBy: req.user.id,
    });
    res.json(problem);
  } catch (err) {
    console.error("createProblem error:", err);
    res.status(500).json({ message: "Server error creating problem" });
  }
};

exports.getProblems = async (req, res) => {
  try {
    const problems = await Problem.find().populate("createdBy", "name role");
    res.json(problems);
  } catch (err) {
    console.error("getProblems error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.getMyProblems = async (req, res) => {
  try {
    const problems = await Problem.find({ createdBy: req.user.id }).populate(
      "createdBy",
      "name role"
    );
    res.json(problems);
  } catch (err) {
    console.error("getMyProblems error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
