import { getElements } from '../utils'

export const typewriter = async (node, options) => {
	const { default: mode } =
		(options.loop && (await import('./loop'))) ||
		(options.cascade && (await import('./cascade'))) ||
		(await import('./default'))
	const elements = getElements(node)
	mode({ node, elements }, options)
}
