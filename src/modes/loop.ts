import { loopTypewriterEffect, createElement } from '@svelte-typewriter/helpers'
import type { TypewriterModeFn, CleanChildNodes } from '@svelte-typewriter/types'

const cleanChildNodes: CleanChildNodes = node => node.childNodes.forEach(el => el.remove())

const loop: TypewriterModeFn = async ({ node, elements }, options) => {
	while (options.loop) {
		for (const { currentNode, text } of elements) {
			cleanChildNodes(node)
			const loopParagraphTag = currentNode.tagName.toLowerCase()
			const loopParagraphAttributes = [...currentNode.attributes]
			const loopParagraph = createElement(text, loopParagraphTag)
			loopParagraphAttributes.forEach(({ name, value }) =>
				loopParagraph.setAttribute(name, value)
			)
			node.appendChild(loopParagraph)
			await loopTypewriterEffect({ currentNode: loopParagraph, text }, options)
			cleanChildNodes(node)
		}
	}
}

export default loop
