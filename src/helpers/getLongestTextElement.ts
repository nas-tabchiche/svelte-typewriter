import type { TypewriterElement } from '@svelte-typewriter/types'

type GetLongestTextElement = (elements: TypewriterElement[]) => Element

type DescendingSortFunction = (
	firstElement: TypewriterElement,
	secondElement: TypewriterElement
) => number

const descendingSortFunction: DescendingSortFunction = (firstElement, secondElement) =>
	secondElement.text.length - firstElement.text.length

const getLongestTextElement: GetLongestTextElement = elements => {
	const descendingTextLengthOrder = elements.sort(descendingSortFunction)
	const longestTextElement = descendingTextLengthOrder[0].currentNode
	return longestTextElement
}

export { getLongestTextElement }
