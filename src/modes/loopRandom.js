/// <reference path='../types.js' />
import { typingInterval, sleep, rng } from '../utils'

const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

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
			console.log(randomText.text.join(''))
			return randomText
		}
		const restartRandomization = alreadyChoosenTexts.length === elements.length
		restartRandomization && console.log('##########')
		restartRandomization && (alreadyChoosenTexts = alreadyChoosenTexts.pop())
	}
}

/** @type {TypewriterEffectFn} */
const typewriterEffect = async ({ currentNode, text }, options) => {
	currentNode.textContent = ''
	currentNode.classList.add('typing')
	for (const letter of text) {
		currentNode.textContent += letter
		const fullyWritten = currentNode.textContent === text.join('')
		if (fullyWritten) {
			options.dispatch('done')
			await sleep(typeof options.loopRandom === 'number' ? options.loopRandom : 1500)
			while (currentNode.textContent !== '') {
				currentNode.textContent = currentNode.textContent.slice(0, -1)
				await typingInterval(options.interval)
			}
		}
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
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
		await typewriterEffect({ currentNode: loopParagraph, text }, options)
		node.childNodes.forEach(el => el.remove())
		cleanChildNodes(node)
	}
}
