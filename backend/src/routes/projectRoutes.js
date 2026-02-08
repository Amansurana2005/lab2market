const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const {
  createProject,
  getProjects,
  getMyProjects,
  getInterestedProjects,
  expressInterest,
  removeInterestedProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

const { body, validationResult } = require('express-validator');

const validateProject = [
  body('title').isLength({ min: 8 }).withMessage('Title should be at least 8 characters'),
  body('abstract').isLength({ min: 30 }).withMessage('Abstract should be at least 30 characters'),
  body('sector').optional().isString(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    next();
  }
];

router.post("/", auth, role(["researcher"]), validateProject, createProject);
router.get("/", auth, role(["investor", "admin"]), getProjects);
router.get("/mine", auth, role(["researcher"]), getMyProjects);
router.get("/interested", auth, role(["investor"]), getInterestedProjects);
router.post("/:id/interest", auth, role(["investor"]), expressInterest);
router.delete(
  "/interested/:id",
  auth,
  role(["investor"]),
  removeInterestedProject
);
router.put("/:id", auth, role(["researcher"]), updateProject);
router.delete("/:id", auth, role(["researcher"]), deleteProject);

module.exports = router;
