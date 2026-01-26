const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS first
app.use(
  cors({
    origin: "https://lab2market-one.vercel.app",
    credentials: true,
  })
);

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
