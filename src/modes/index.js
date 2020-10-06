import { getElements } from '../utils'

/**
 * The options object
 * @typedef {Object} TypewriterOptions
 * @property {number|number[]} interval The interval between keystrokes
 * @property {boolean} cascade Toggles the `cascade` animation mode
 * @property {boolean|number} loop Toggles the `loop` animation mode (if it's a number, sets the interval on each word reset)
 * @property {boolean|string} cursor Toggles the `cursor` animation effect (if it's a string, sets the cursor color)
 * @property {number} delay
 * @property {(type: string, detail?: any) => void} dispatch Svelte's dispatch function
 */

/**
 *
 * @param {HTMLElement} node The parent element to be animated
 * @param {TypewriterOptions} options The animation properties
 */
export const typewriter = async (node, options) => {
	const { default: mode } =
		(options.loop && (await import('./loop'))) ||
		(options.cascade && (await import('./cascade'))) ||
		(await import('./default'))
	const elements = getElements(node)
	if (options.delay > 0) {
		const { sleep } = await import('../utils')
		await sleep(options.delay)
		node.classList.remove('delay')
	}
	mode({ node, elements }, options)
}
