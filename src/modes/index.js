/// <reference path='../types.js' />
import { getElements } from '../utils'

/** @type {(node: HTMLElement, options: TypewriterOptions) => Promise<any>} */
export const typewriter = async (node, options) => {
	const { default: mode } =
		(options.loop && (await import('./loop'))) ||
		(options.cascade && (await import('./cascade'))) ||
		(options.scramble && (await import('./scramble'))) ||
		(await import('./default'))
	const elements = getElements(node)
	if (options.delay > 0) {
		const { sleep } = await import('../utils')
		await sleep(options.delay)
		node.classList.remove('delay')
	}
	mode({ node, elements }, options)
}
