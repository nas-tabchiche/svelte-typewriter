interface ElementToScramble {
	currentNode: Element
	matchingLetters: number[]
}

type GetMatchingLetters = (elementWithScrambledText: Element) => any

type GetHTMLTagIndexes = (element: Element) => number[][]

type IsLetterHTMLTag = (letterIdx: number, HTMLTagIndexes: number[][]) => boolean

type ScrambleLetters = (element: Element) => void

type HasMatchingLetter = (elementWithScrambledText: Element, normalText: string) => void

export {
	ElementToScramble,
	GetMatchingLetters,
	GetHTMLTagIndexes,
	IsLetterHTMLTag,
	ScrambleLetters,
	HasMatchingLetter
}
