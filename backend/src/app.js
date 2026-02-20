const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// Sentry (optional)
let Sentry;
try {
  Sentry = require("@sentry/node");
  const SENTRY_DSN = process.env.SENTRY_DSN;
  if (SENTRY_DSN) {
    Sentry.init({ dsn: SENTRY_DSN });
  }
} catch (e) {
  // ignore if not installed
}

const app = express();

// Security middleware
app.use(helmet());
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 200 });
app.use(limiter);

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

// Request parsing
app.use(express.json());

// If Sentry is enabled and exposes Handlers, attach request handler
if (Sentry && Sentry.Handlers && typeof Sentry.Handlers.requestHandler === "function") {
  app.use(Sentry.Handlers.requestHandler());
} else if (Sentry) {
  // log minimal info for debugging in environments where Sentry is present
  // but Handlers aren't available (avoid crashing the server)
  console.warn("Sentry loaded but Handlers.requestHandler is unavailable; skipping Sentry request handler.");
}

// routes
/*
Temporarily disabled auth, project and messaging routes for curated consultancy model.
The original route mounts are preserved below for reactivation.

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
*/

// Facilitation routes (for structured industry-research collaboration)
app.use("/api/facilitation", require("./routes/facilitationRoutes"));

// Keep problem routes active (read-only use may be restored as needed)
app.use("/api/problems", require("./routes/problemRoutes"));

// Provide informational endpoints for disabled APIs to avoid 404s
app.use("/api/auth", (req, res) => res.status(503).json({ message: "Authentication endpoints temporarily disabled for curated consultancy model." }));
app.use("/api/projects", (req, res) => res.status(503).json({ message: "Project endpoints temporarily disabled for curated consultancy model." }));
app.use("/api/messages", (req, res) => res.status(503).json({ message: "Messaging endpoints temporarily disabled for curated consultancy model." }));

app.get("/", (req, res) => {
  res.send("Lab2Market Backend Running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// If Sentry is enabled and exposes Handlers, add error handler
if (Sentry && Sentry.Handlers && typeof Sentry.Handlers.errorHandler === "function") {
  app.use(Sentry.Handlers.errorHandler());
} else if (Sentry) {
  console.warn("Sentry loaded but Handlers.errorHandler is unavailable; skipping Sentry error handler.");
}

module.exports = app;
