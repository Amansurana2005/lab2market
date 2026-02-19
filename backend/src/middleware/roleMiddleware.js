/*
Temporarily disabled role-based access checks for curated consultancy model.
Original implementation is preserved below. While disabled, the middleware
simply proceeds to the next handler.
*/
module.exports = () => {
  return (req, res, next) => {
    next();
  };
};

/* Original implementation:
module.exports = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};
*/
