require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

// Connect to DB only when MONGO_URI is provided. In curated/preview mode
// we may skip DB connection to allow the server to start without a database.
if (process.env.MONGO_URI) {
  connectDB();
} else {
  console.warn("MONGO_URI not set — skipping DB connection (preview mode)");
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
