import { typingInterval } from '@svelte-typewriter/helpers'
import type {
	ElementToScramble,
	GetMatchingLetters,
	GetHTMLTagIndexes,
	IsInRange,
	IsLetterHTMLTag,
	ScrambleLetters,
	HasMatchingLetter,
	TypewriterModeFn
} from '@svelte-typewriter/types'

let elementsToScramble: ElementToScramble[] = []

const getMatchingLetters: GetMatchingLetters = elementWithScrambledText =>
	elementsToScramble.find(element => element.currentNode === elementWithScrambledText)

const getHTMLTagsIndexes: GetHTMLTagIndexes = element => {
	const getHTMLTagsRegex = /(<([^>]+)>)/g
	const HTMLTagsIndexes = []
	let HTMLTagsFound: RegExpExecArray | null
	while ((HTMLTagsFound = getHTMLTagsRegex.exec(element.innerHTML)) !== null) {
		const tagStartingPosition = HTMLTagsFound.index
		const tagEndingPosition = getHTMLTagsRegex.lastIndex
		// The tagEndingPosition must be subtracted, otherwise, it will match one character after the tag
		HTMLTagsIndexes.push([tagStartingPosition, tagEndingPosition - 1])
	}
	return HTMLTagsIndexes
}

const isInRange: IsInRange = (val, [min, max]) => val >= min && val <= max

const isLetterHTMLTag: IsLetterHTMLTag = (letterIdx, HTMLTagIndexes) => {
	const isLetterIndexHtmlTag = HTMLTagIndexes.some(([tagStartingIndex, tagEndingIndex]) => {
		const isHTMLTag = isInRange(letterIdx, [tagStartingIndex, tagEndingIndex])
		return isHTMLTag
	})
	return isLetterIndexHtmlTag
}

const scrambleLetters: ScrambleLetters = element => {
	const HTMLTagIndexes = getHTMLTagsIndexes(element)
	const scrambledText = element.innerHTML
		.split('')
		.map((letter, letterIdx) => {
			const { matchingLetters } = getMatchingLetters(element)
			const emptySpaceRegex = /\s+/g
			const foundMatchingLetterOrSpace =
				matchingLetters.includes(letterIdx) ||
				letter.match(emptySpaceRegex) ||
				isLetterHTMLTag(letterIdx, HTMLTagIndexes)
			const randomLetter = String.fromCharCode(65 + Math.round(Math.random() * 50))
			return foundMatchingLetterOrSpace ? letter : randomLetter
		})
		.join('')
	element.innerHTML = scrambledText
}

const hasMatchingLetter: HasMatchingLetter = (elementWithScrambledText, normalText) => {
	const scrambledText = elementWithScrambledText.innerHTML
	for (let i = 0; i < normalText.length; i++) {
		const letter = normalText[i]
		const { matchingLetters } = getMatchingLetters(elementWithScrambledText)
		!matchingLetters.includes(i) && letter === scrambledText[i] && matchingLetters.push(i)
	}
}

const scramble: TypewriterModeFn = async ({ elements }, options) => {
	elementsToScramble = [
		...elements.map(({ currentNode }) => ({ currentNode, matchingLetters: [] }))
	]
	await new Promise<void>(resolve => {
		elements.forEach(async ({ currentNode, text }) => {
			const scrambleDuration = typeof options.scramble == 'number' ? options.scramble : 3000
			const startTime = new Date().getTime()
			while (true) {
				scrambleLetters(currentNode)
				hasMatchingLetter(currentNode, text)
				await typingInterval(options.interval)
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

export default scramble
