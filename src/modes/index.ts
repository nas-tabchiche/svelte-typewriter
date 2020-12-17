import { getElements } from '@svelte-typewriter/helpers'
import type { TypewriterMainFn } from '@svelte-typewriter/types'

const typewriter: TypewriterMainFn = async (node, options) => {
	const { default: mode } =
		((options.loop || options.loopRandom) && (await import('./loop'))) ||
		(options.cascade && (await import('./cascade'))) ||
		(options.scramble && (await import('./scramble'))) ||
		(await import('./default'))
	const elements = getElements(node)
	if (options.delay > 0) {
		const { sleep } = await import('../helpers')
		await sleep(options.delay)
		node.classList.remove('delay')
	}
	mode({ node, elements }, options)
}

export { typewriter }
