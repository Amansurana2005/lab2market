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

// If Sentry is enabled, attach request handler
if (Sentry) app.use(Sentry.Handlers.requestHandler());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/projects", require("./routes/projectRoutes"));
app.use("/api/messages", require("./routes/messageRoutes"));
// Problems (industry-posted)
app.use("/api/problems", require("./routes/problemRoutes"));

app.get("/", (req, res) => {
  res.send("Lab2Market Backend Running 🚀");
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// If Sentry is enabled, add error handler
if (Sentry) app.use(Sentry.Handlers.errorHandler());

module.exports = app;
