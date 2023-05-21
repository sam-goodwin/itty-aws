/**
 * Rounds a number to two decimal places.
 * @param {number} num - The number to be rounded.
 * @returns {number} The rounded number.
 */
export const roundToTwoDecimalPlaces = (num: number): number =>
  Math.round(num * 100) / 100;
