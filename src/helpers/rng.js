/// <reference path='../types.js' />

/**
 * Generates a random number between `min` and `max`
 * @param {number} min The minimum value in range
 * @param {number} max The maximum value in range
 * @example
 * // Generates a random number between 10 and 20
 * rng(10, 20)
 */
const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)

export { rng }
