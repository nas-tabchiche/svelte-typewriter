import { getElements } from '@svelte-typewriter/helpers/getElements'
import type { TypewriterMainFn } from '@svelte-typewriter/types'

const typewriter: TypewriterMainFn = async (node, options) => {
	const { mode } =
		options.loop || options.loopRandom
			? await import('./loopTypewriter')
			: await import('./typewriter')
	const elements = getElements(node)
	if (options.delay > 0) {
		const { sleep } = await import('@svelte-typewriter/helpers/sleep')
		await sleep(options.delay)
		node.classList.remove('delay')
	}
	mode(elements, options)
}

export { typewriter }
