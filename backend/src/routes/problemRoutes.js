const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createProblem,
  getProblems,
  getMyProblems,
} = require("../controllers/problemController");

// Industry posts a problem (investor or admin)
router.post("/", auth, role(["investor", "admin"]), createProblem);

// List all problems (public)
router.get("/", getProblems);

// List my problems (industry user)
router.get("/mine", auth, role(["investor", "admin"]), getMyProblems);

module.exports = router;
