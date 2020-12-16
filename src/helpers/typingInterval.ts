import { sleep, rng } from '@svelte-typewriter/helpers'

/**
 * Delay for each keystroke during the typewriter animation
 * @param {number|number[]} interval The delay between each letter during typing animation (if is an array, randomly cycles between it's numbers for each letter)
 * @example
 * // Delays the next keystroke for 40 milliseconds
 * typingInterval(40)
 * // Randomly delays the next keystroke for 15, 30 or 45 milliseconds
 * typingInterval([15, 30, 45])
 */
const typingInterval = async (interval: any) => sleep(interval[rng(0, interval.length)] || interval)

export { typingInterval }
