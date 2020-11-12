/// <reference path='../types.js' />
import { loopTypewriterEffect, rng, cleanChildNodes, hasSingleTextNode } from '../utils'

let alreadyChoosenTexts = []

const getRandomText = elements => {
	while (true) {
		const randomIndex = rng(0, elements.length)
		const isTextDifferentFromPrevious =
			typeof alreadyChoosenTexts === 'number' && randomIndex !== alreadyChoosenTexts
		const isTextFirstTime =
			Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex)
		const shouldDisplayText = isTextFirstTime || isTextDifferentFromPrevious
		if (shouldDisplayText) {
			isTextDifferentFromPrevious && (alreadyChoosenTexts = [])
			alreadyChoosenTexts.push(randomIndex)
			const randomText = elements[randomIndex]
			return randomText
		}
		const restartRandomization = alreadyChoosenTexts.length === elements.length
		if (restartRandomization) {
			!hasSingleTextNode
				? (alreadyChoosenTexts = alreadyChoosenTexts.pop())
				: (alreadyChoosenTexts = [])
		}
	}
}

/** @type {TypewriterModeFn} */
export default async ({ node, elements }, options) => {
	while (options.loopRandom) {
		const { currentNode, text } = getRandomText(elements)
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
