/*
Temporarily disabled JWT verification middleware for curated consultancy model.
Original implementation is preserved below. The middleware currently allows
requests to proceed and marks the user as a guest. Restore JWT verification
to re-enable protected endpoints.
*/

module.exports = function (req, res, next) {
  // Mark requests as coming from a guest user while auth is disabled
  req.user = { id: null, role: "guest" };
  next();
};

/* Original implementation:
const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader)
    return res.status(401).json({ message: "No token, access denied" });

  // Extract token from "Bearer <token>"
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.slice(7)
    : authHeader;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token invalid" });
  }
};
*/
