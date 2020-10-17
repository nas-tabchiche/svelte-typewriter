/// <reference path='../types.js' />
import { sleep } from '../utils'

const randomString = (text, matchingLetters) => {
	//  F  o  o  b  a  r
	// [0, 1, 2, 3, 4, 5]
	// Loop through text and check if each letter is found, or is a space
	// Otherwise, generate a random character
	return [...Array(text.length).keys()]
		.map(letterIdx => {
			const foundMatchingLetterOrSpace =
				matchingLetters.includes(letterIdx) || text[letterIdx] == ' '
			const randomLetter = String.fromCharCode(65 + Math.round(Math.random() * 50))
			return foundMatchingLetterOrSpace ? text[letterIdx] : randomLetter
		})
		.join('')
}

/** @type {TypewriterModeFn} */
export default async ({ elements }, options) => {
	elements.forEach(async ({ currentNode, text }) => {
		const matchingLetters = []
		const scrambleDuration = typeof options.scramble == 'number' ? options.scramble : 3000
		const startTime = new Date().getTime()
		while (true) {
			currentNode.textContent = randomString(currentNode.textContent, matchingLetters)
			// Check if the scrambled text has any matching letter
			for (let i = 0; i < text.length; i++) {
				const scrambledText = currentNode.textContent
				if (!matchingLetters.includes(i) && text[i] === scrambledText[i])
					matchingLetters.push(i)
			}
			await sleep(options.interval)
			const scrambledTextMatch = currentNode.textContent != text.join('')
			const didTimeout = new Date().getTime() - startTime < scrambleDuration
			if (!scrambledTextMatch || !didTimeout) break
		}
		options.dispatch('done')
		currentNode.textContent = text.join('')
	})
}
