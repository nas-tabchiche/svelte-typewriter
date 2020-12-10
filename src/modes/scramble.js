/// <reference path='../types.js' />
import { sleep } from '../utils'

let elementsToScramble = []

const getMatchingLetters = elementWithScrambledText =>
	elementsToScramble.find(element => element.currentNode === elementWithScrambledText)

const scrambleLetters = element => {
	const scrambledText = element.innerHTML
		.replaceAll(/(<([^>]+)>)/gi, '')
		.split('')
		.map((letter, letterIdx) => {
			const { matchingLetters } = getMatchingLetters(element)
			const foundMatchingLetterOrSpace = matchingLetters.includes(letterIdx) || letter === ' '
			const randomLetter = String.fromCharCode(65 + Math.round(Math.random() * 50))
			return foundMatchingLetterOrSpace ? letter : randomLetter
		})
		.join('')
	element.innerHTML = scrambledText
}

const hasMatchingLetter = (elementWithScrambledText, normalText) => {
	const scrambledText = elementWithScrambledText.innerHTML.replaceAll(/(<([^>]+)>)/gi, '')
	for (let i = 0; i < normalText.length; i++) {
		const letter = normalText[i]
		const { matchingLetters } = getMatchingLetters(elementWithScrambledText)
		!matchingLetters.includes(i) && letter === scrambledText[i] && matchingLetters.push(i)
	}
}

/** @type {TypewriterModeFn} */
export default async ({ elements }, options) => {
	elementsToScramble = [
		...elements.map(({ currentNode }) => ({ currentNode, matchingLetters: [] }))
	]
	console.log(elementsToScramble)
	await new Promise(resolve => {
		elements.forEach(async ({ currentNode, text }) => {
			const scrambleDuration = typeof options.scramble == 'number' ? options.scramble : 3000
			const startTime = new Date().getTime()
			while (true) {
				scrambleLetters(currentNode)
				hasMatchingLetter(currentNode, text)
				await sleep(options.interval)
				const scrambledTextMatch = currentNode.innerHTML != text
				const didTimeout = new Date().getTime() - startTime < scrambleDuration
				if (!scrambledTextMatch || !didTimeout) {
					resolve()
					break
				}
			}
			currentNode.innerHTML = text
		})
	})
	options.dispatch('done')
}
