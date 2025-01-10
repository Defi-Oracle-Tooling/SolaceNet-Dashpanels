// Data formatting utility functions

/**
 * Formats a date to 'YYYY-MM-DD' format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

/**
 * Formats a number to a currency string.
 * @param {number} amount - The amount to format.
 * @param {string} currency - The currency symbol.
 * @returns {string} - The formatted currency string.
 */
export const formatCurrency = (amount, currency = '$') => {
  return `${currency}${amount.toFixed(2)}`;
};