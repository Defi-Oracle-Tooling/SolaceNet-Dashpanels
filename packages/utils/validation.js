// Validation utility functions

/**
 * Validates if the input is a non-empty string.
 * @param {string} str - The string to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const isNonEmptyString = (str) => {
  return typeof str === 'string' && str.trim().length > 0;
};

/**
 * Validates if the input is a valid email address.
 * @param {string} email - The email to validate.
 * @returns {boolean} - True if valid, false otherwise.
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};