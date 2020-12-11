/// <reference path='../types.js' />
import { loopTypewriterEffect, createElement } from '../utils'

const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

/** @type {TypewriterModeFn} */
export default async ({ node, elements }, options) => {
	while (options.loop) {
		for (const { currentNode, text } of elements) {
			cleanChildNodes(node)
			const loopParagraphTag = currentNode.tagName.toLowerCase()
			const loopParagraph = createElement(text, loopParagraphTag)
			node.appendChild(loopParagraph)
			await loopTypewriterEffect({ currentNode: loopParagraph, text }, options)
			cleanChildNodes(node)
		}
	}
}
