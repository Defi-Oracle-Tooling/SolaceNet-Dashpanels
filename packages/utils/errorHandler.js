// Error handling utility functions

/**
 * Logs an error message to the console.
 * @param {Error} error - The error to log.
 */
export const logError = (error) => {
  console.error(`Error: ${error.message}`);
};

/**
 * Handles an error by logging it and returning a user-friendly message.
 * @param {Error} error - The error to handle.
 * @returns {string} - The user-friendly error message.
 */
export const handleError = (error) => {
  logError(error);
  return 'An unexpected error occurred. Please try again later.';
};