/// <reference path='../types.js' />
import { loopTypewriterEffect } from '../utils'

const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

/** @type {TypewriterModeFn} */
export default async ({ node, elements }, options) => {
	while (options.loop) {
		for (const { currentNode, text } of elements) {
			cleanChildNodes(node)
			const loopParagraphTag = currentNode.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			loopParagraph.textContent = text.join('')
			node.appendChild(loopParagraph)
			await loopTypewriterEffect({ currentNode: loopParagraph, text }, options)
			node.childNodes.forEach(el => el.remove())
			cleanChildNodes(node)
		}
	}
}
