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

// Industry posts a problem (investor or admin) - validate input
const { body, validationResult } = require('express-validator');

const validateProblem = [
  body('title').isLength({ min: 10 }).withMessage('Title should be at least 10 characters'),
  body('description').isLength({ min: 30 }).withMessage('Description should be at least 30 characters'),
  body('sector').notEmpty().withMessage('Sector is required'),
  body('contactInfo').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

router.post("/", auth, role(["investor", "admin"]), validateProblem, createProblem);

// List all problems (public)
router.get("/", getProblems);

// List my problems (industry user)
router.get("/mine", auth, role(["investor", "admin"]), getMyProblems);

// Update a problem (owner only)
router.put("/:id", auth, role(["investor", "admin"]), updateProblem);

// Delete a problem (owner only)
router.delete("/:id", auth, role(["investor", "admin"]), deleteProblem);

module.exports = router;
