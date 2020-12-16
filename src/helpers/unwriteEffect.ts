import { typingInterval } from '@svelte-typewriter/helpers'
import type { TypewriterOptions } from '@svelte-typewriter/types'

type UnwriteEffect = (currentNode: Element, options: TypewriterOptions) => Promise<void>

const unwriteEffect: UnwriteEffect = async (currentNode, options) => {
	const text = currentNode.innerHTML.replaceAll('&amp;', '&')
	for (let index = text.length - 1; index >= 0; index--) {
		const letter = text[index]
		letter === '>' && (index = text.lastIndexOf('<', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
}

export { unwriteEffect }
