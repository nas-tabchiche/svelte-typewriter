/// <reference path='../types.js' />
import { sleep } from '../utils'

let matchingLetters = []

const scrambleLetters = (element, matchingLetters) => {
	const scrambledText = element.textContent
		.split('')
		.map((letter, index) => {
			const foundMatchingLetterOrSpace = matchingLetters.includes(index) || letter === ' '
			const randomLetter = String.fromCharCode(65 + Math.round(Math.random() * 50))
			return foundMatchingLetterOrSpace ? letter : randomLetter
		})
		.join('')
	element.textContent = scrambledText
	return scrambledText
}

const hasMatchingLetter = (scrambledText, normalText) =>
	normalText.forEach(
		(letter, i) =>
			!matchingLetters.includes(i) && letter === scrambledText[i] && matchingLetters.push(i)
	)

/** @type {TypewriterModeFn} */
export default async ({ elements }, options) => {
	elements.forEach(async ({ currentNode, text }) => {
		matchingLetters = []
		const scrambleDuration = typeof options.scramble == 'number' ? options.scramble : 3000
		const startTime = new Date().getTime()
		while (true) {
			const scrambledText = scrambleLetters(currentNode, matchingLetters)
			// Check if the scrambled text has any matching letter
			hasMatchingLetter(scrambledText, text)
			await sleep(options.interval)
			const scrambledTextMatch = currentNode.textContent != text.join('')
			const didTimeout = new Date().getTime() - startTime < scrambleDuration
			if (!scrambledTextMatch || !didTimeout) break
		}
		options.dispatch('done')
		currentNode.textContent = text.join('')
	})
}
