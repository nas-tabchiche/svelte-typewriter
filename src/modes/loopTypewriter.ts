import { writeEffect, unwriteEffect, getRandomElement } from '@svelte-typewriter/helpers'
import type { LoopAnimation, TypewriterModeFn } from '@svelte-typewriter/types'

const loopTypewriter: LoopAnimation = async ({ currentNode, text }, options) => {
	await writeEffect({ currentNode, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(currentNode, options))
}

const mode: TypewriterModeFn = async (elements, options) => {
	while (true) {
		if (options.loop) {
			for (const element of elements) await loopTypewriter(element, options)
		} else if (options.loopRandom) {
			const element = getRandomElement(elements)
			await loopTypewriter(element, options)
		}
	}
}

export { mode }
