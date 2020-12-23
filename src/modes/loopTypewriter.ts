import { writeEffect, unwriteEffect, getRandomElement } from '@svelte-typewriter/helpers'
import type { LoopAnimation, TypewriterModeFn } from '@svelte-typewriter/types'

const loopTypewriter: LoopAnimation = async (parentElement, { currentNode, text }, options) => {
	//const loopParagraphTag = currentNode.tagName.toLowerCase()
	//const loopParagraph = createElement(text, loopParagraphTag)
	//const loopParagraphAttributes = [...currentNode.attributes]
	//loopParagraphAttributes.forEach(({ name, value }) => loopParagraph.setAttribute(name, value))
	//parentElement.appendChild(loopParagraph)
	await writeEffect({ currentNode, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(currentNode, options))
}

const mode: TypewriterModeFn = async ({ node, elements }, options) => {
	while (true) {
		if (options.loop) {
			for (const element of elements) await loopTypewriter(node, element, options)
		} else if (options.loopRandom) {
			const element = getRandomElement(elements)
			await loopTypewriter(node, element, options)
		}
	}
}

export { mode }
