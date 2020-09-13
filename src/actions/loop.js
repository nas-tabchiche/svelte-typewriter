import { typewriterEffect } from '../typewriter-effect'
import { getElements } from '../utils'

console.log('loop')

export default async (node, options) => {
	const elements = getElements(node)
	const loopParagraphTag = node.firstChild.tagName.toLowerCase()
	const loopParagraph = document.createElement(loopParagraphTag)
	node.childNodes.forEach(el => el.remove())
	node.appendChild(loopParagraph)
	while (options.loop) {
		for (const { currentNode, text } of elements) {
			node.childNodes.forEach(el => el.remove())
			const loopParagraphTag = currentNode.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			loopParagraph.textContent = text.join('')
			node.appendChild(loopParagraph)
			await typewriterEffect({ currentNode: loopParagraph, text }, options)
			node.childNodes.forEach(el => el.remove())
		}
	}
}
