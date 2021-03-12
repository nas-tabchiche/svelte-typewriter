import { writeEffect } from '@svelte-typewriter/helpers/writeEffect'
import { unwriteEffect } from '@svelte-typewriter/helpers/unwriteEffect'
import { getRandomElement } from '@svelte-typewriter/helpers/getRandomElement'

/** @type {import('types').TypewriterEffectFn} */
const loopTypewriter = async ({ currentNode, text }, options) => {
	await writeEffect({ currentNode, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(currentNode, options))
}

/** @type {import('types').TypewriterModeFn} */
const mode = async (elements, options) => {
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
