import { loopTypewriterEffect, createElement } from '@svelte-typewriter/helpers'

const cleanChildNodes = (node: any) => node.childNodes.forEach((el: any) => el.remove())

/** @type {TypewriterModeFn} */
export default async ({ node, elements }: any, options: any) => {
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
