import { sleep } from '../helpers'

let elementsToScramble: any = []

const getMatchingLetters = (elementWithScrambledText: any) =>
	elementsToScramble.find((element: any) => element.currentNode === elementWithScrambledText)

const getHTMLTagsIndexes = (element: any) => {
	const getHTMLTagsRegex = /(<([^>]+)>)/g
	const HTMLTagsIndexes = []
	let HTMLTagsFound: any = []
	while ((HTMLTagsFound = getHTMLTagsRegex.exec(element.innerHTML)) !== null) {
		const tagStartingPosition = HTMLTagsFound.index
		const tagEndingPosition = getHTMLTagsRegex.lastIndex
		// The tagEndingPosition must be subtracted, otherwise, it will match one character after the tag
		HTMLTagsIndexes.push([tagStartingPosition, tagEndingPosition - 1])
	}
	return HTMLTagsIndexes
}

const isInRange = (val: any, min: any, max: any) => val >= min && val <= max

const isLetterHTMLTag = (letterIdx: any, HTMLTagIndexes: any) => {
	const isLetterIndexHtmlTag = HTMLTagIndexes.some(([tagStartingIndex, tagEndingIndex]: any) => {
		const isHTMLTag = isInRange(letterIdx, tagStartingIndex, tagEndingIndex)
		return isHTMLTag
	})
	return isLetterIndexHtmlTag
}

const scrambleLetters = (element: any) => {
	const HTMLTagIndexes = getHTMLTagsIndexes(element)
	const scrambledText = element.innerHTML
		.split('')
		.map((letter: any, letterIdx: any) => {
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

const hasMatchingLetter = (elementWithScrambledText: any, normalText: any) => {
	const scrambledText = elementWithScrambledText.innerHTML
	for (let i = 0; i < normalText.length; i++) {
		const letter = normalText[i]
		const { matchingLetters } = getMatchingLetters(elementWithScrambledText)
		!matchingLetters.includes(i) && letter === scrambledText[i] && matchingLetters.push(i)
	}
}

/** @type {TypewriterModeFn} */
export default async ({ elements }: any, options: any) => {
	elementsToScramble = [
		...elements.map(({ currentNode }: any) => ({ currentNode, matchingLetters: [] }))
	]
	await new Promise((resolve: any) => {
		elements.forEach(async ({ currentNode, text }: any) => {
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
