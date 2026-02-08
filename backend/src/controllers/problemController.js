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
    // Pagination & optional search
    const page = Math.max(1, parseInt(req.query.page || "1"));
    const limit = Math.min(100, parseInt(req.query.limit || "20"));
    const search = req.query.q;
    const filter = {};
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    const total = await Problem.countDocuments(filter);
    const problems = await Problem.find(filter)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("createdBy", "name role");

    res.json({ data: problems, total, page, pages: Math.ceil(total / limit) });
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

exports.updateProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findById(id);
    if (!problem) return res.status(404).json({ message: "Problem not found" });
    if (problem.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });
    Object.assign(problem, req.body);
    await problem.save();
    const updated = await Problem.findById(id).populate(
      "createdBy",
      "name role"
    );
    res.json(updated);
  } catch (err) {
    console.error("updateProblem error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.deleteProblem = async (req, res) => {
  try {
    const { id } = req.params;
    const problem = await Problem.findById(id);
    if (!problem) return res.status(404).json({ message: "Problem not found" });
    if (problem.createdBy.toString() !== req.user.id)
      return res.status(403).json({ message: "Not authorized" });
    await Problem.findByIdAndDelete(id);
    res.json({ message: "Problem deleted" });
  } catch (err) {
    console.error("deleteProblem error:", err);
    res.status(500).json({ message: "Server error" });
  }
};
