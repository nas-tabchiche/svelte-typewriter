interface ElementToScramble {
	currentNode: Element
	matchingLetters: number[]
}

type GetMatchingLetters = (elementWithScrambledText: Element) => any

type GetHTMLTagIndexes = (element: Element) => number[][]

type IsInRange = (val: number, minMaxRange: [min: number, max: number]) => boolean

type IsLetterHTMLTag = (letterIdx: number, HTMLTagIndexes: number[][]) => boolean

type ScrambleLetters = (element: Element) => void

type HasMatchingLetter = (elementWithScrambledText: Element, normalText: string) => void

export {
	ElementToScramble,
	GetMatchingLetters,
	GetHTMLTagIndexes,
	IsInRange,
	IsLetterHTMLTag,
	ScrambleLetters,
	HasMatchingLetter
}
