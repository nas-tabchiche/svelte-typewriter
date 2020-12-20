import {
	writeEffect,
	unwriteEffect,
	getRandomElement,
	createElement,
	cleanChildNodes
} from '@svelte-typewriter/helpers'
import type { LoopAnimation, TypewriterModeFn } from '@svelte-typewriter/types'

const loopTypewriter: LoopAnimation = async (parentElement, { currentNode, text }, options) => {
	cleanChildNodes(parentElement)
	const loopParagraphTag = currentNode.tagName.toLowerCase()
	const loopParagraph = createElement(text, loopParagraphTag)
	const loopParagraphAttributes = [...currentNode.attributes]
	loopParagraphAttributes.forEach(({ name, value }) => loopParagraph.setAttribute(name, value))
	parentElement.appendChild(loopParagraph)
	await writeEffect({ currentNode: loopParagraph, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = loopParagraph.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(loopParagraph, options))
	cleanChildNodes(parentElement)
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
