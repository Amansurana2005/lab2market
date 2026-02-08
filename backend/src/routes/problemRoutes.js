const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createProblem,
  getProblems,
  getMyProblems,
  updateProblem,
  deleteProblem,
} = require("../controllers/problemController");

// Industry posts a problem (investor or admin)
router.post("/", auth, role(["investor", "admin"]), createProblem);

// List all problems (public)
router.get("/", getProblems);

// List my problems (industry user)
router.get("/mine", auth, role(["investor", "admin"]), getMyProblems);

// Update a problem (owner only)
router.put("/:id", auth, role(["investor", "admin"]), updateProblem);

// Delete a problem (owner only)
router.delete("/:id", auth, role(["investor", "admin"]), deleteProblem);

module.exports = router;
