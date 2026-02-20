// Validation utilities for facilitationRoutes

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validateRequired = (fields) => {
  return fields.every((field) => field && field.trim() !== "");
};

module.exports = {
  validateEmail,
  validateRequired,
};
