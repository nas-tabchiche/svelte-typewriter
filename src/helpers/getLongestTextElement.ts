import type { TypewriterElement } from '@svelte-typewriter/types'

type GetLongestTextElement = (elements: TypewriterElement[]) => TypewriterElement

const getLongestTextElement: GetLongestTextElement = elements => {
	return elements.reduce((longestTextElement, element) => {
		const longestTextLength = longestTextElement.text.length
		return element.text.length > longestTextLength
			? (longestTextElement = element)
			: longestTextElement
	})
}

export { getLongestTextElement }
