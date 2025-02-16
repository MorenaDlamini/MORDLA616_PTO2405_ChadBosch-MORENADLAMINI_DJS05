/**
 * Utility functions for the tally application.
 * 
 * @module utils
 */

/**
 * Ensures a valid numeric payload.
 * 
 * @param {*} value - The value to check.
 * @param {number} [defaultValue=1] - The default value if input is invalid.
 * @returns {number} A valid numeric value.
 */
export const getValidNumber = (value, defaultValue = 1) =>
    typeof value === 'number' && !isNaN(value) ? value : defaultValue;
