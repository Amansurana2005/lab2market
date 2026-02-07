const express = require("express");
const cors = require("cors");

const app = express();

// Configure CORS to allow your deployed frontend (set FRONTEND_URL in env)
// Use process.env.FRONTEND_URL so Render (or other hosts) can set the allowed origin.
const FRONTEND_URL = process.env.FRONTEND_URL || "*";
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like server-to-server or curl)
    if (!origin) return callback(null, true);
    if (FRONTEND_URL === "*" || origin === FRONTEND_URL) return callback(null, true);
    return callback(new Error("CORS policy: Origin not allowed"));
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));

app.get("/", (req, res) => {
  res.send("Lab2Market Backend Running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

module.exports = app;
