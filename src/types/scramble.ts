interface ElementToScramble {
	currentNode: HTMLElement
	matchingLetters: number[]
}

type GetMatchingLetters = (elementWithScrambledText: HTMLElement) => any

type GetHTMLTagIndexes = (element: HTMLElement) => number[][]

type IsInRange = (val: number, minMaxRange: [min: number, max: number]) => boolean

type IsLetterHTMLTag = (letterIdx: number, HTMLTagIndexes: number[][]) => boolean

type ScrambleLetters = (element: HTMLElement) => void

type HasMatchingLetter = (elementWithScrambledText: HTMLElement, normalText: string) => void

export {
	ElementToScramble,
	GetMatchingLetters,
	GetHTMLTagIndexes,
	IsInRange,
	IsLetterHTMLTag,
	ScrambleLetters,
	HasMatchingLetter
}
