import { typewriterEffect } from '../typewriter-effect'
import { getElements } from '../utils'

const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

export default async (node, options) => {
	const elements = getElements(node)
	while (options.loop) {
		for (const { currentNode, text } of elements) {
			cleanChildNodes(node)
			const loopParagraphTag = currentNode.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			loopParagraph.textContent = text.join('')
			node.appendChild(loopParagraph)
			await typewriterEffect({ currentNode: loopParagraph, text }, options)
			node.childNodes.forEach(el => el.remove())
			cleanChildNodes(node)
		}
	}
}
