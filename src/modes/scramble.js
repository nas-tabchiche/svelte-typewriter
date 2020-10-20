/// <reference path='../types.js' />
import { sleep } from '../utils'

let matchingLetters = []

const scrambleLetters = element => {
	const scrambledText = element.textContent
		.split('')
		.map((letter, index) => {
			const foundMatchingLetterOrSpace =
				matchingLetters.some(
					({ currentNode, matchingLetters }) =>
						currentNode === element && matchingLetters.includes(index)
				) || letter === ' '
			const randomLetter = String.fromCharCode(65 + Math.round(Math.random() * 50))
			return foundMatchingLetterOrSpace ? letter : randomLetter
		})
		.join('')
	element.textContent = scrambledText
}

const hasMatchingLetter = (elementWithScrambledText, normalText) => {
	const scrambledText = elementWithScrambledText.textContent
	normalText.forEach((letter, i) => {
		!matchingLetters.some(
			({ matchingLetters, currentNode }) =>
				currentNode === elementWithScrambledText && matchingLetters.includes(i)
		) &&
			letter === scrambledText[i] &&
			matchingLetters.forEach(
				({ currentNode, matchingLetters }) =>
					currentNode === elementWithScrambledText && matchingLetters.push(i)
			)
	})
}

/** @type {TypewriterModeFn} */
export default async ({ elements }, options) => {
	matchingLetters = [...elements.map(({ currentNode }) => ({ currentNode, matchingLetters: [] }))]
	elements.forEach(async ({ currentNode, text }) => {
		const scrambleDuration = typeof options.scramble == 'number' ? options.scramble : 3000
		const startTime = new Date().getTime()
		console.log(matchingLetters)
		while (true) {
			scrambleLetters(currentNode)
			hasMatchingLetter(currentNode, text)
			await sleep(options.interval)
			const scrambledTextMatch = currentNode.textContent != text.join('')
			const didTimeout = new Date().getTime() - startTime < scrambleDuration
			if (!scrambledTextMatch || !didTimeout) break
		}
		options.dispatch('done')
		currentNode.textContent = text.join('')
	})
}
