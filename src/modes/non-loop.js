import { typewriterEffect } from '../typewriter-effect'
import { getElements } from '../utils'

export default async (node, options) => {
	const elements = getElements(node)
	options.cascade && elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
	for (const element of elements) {
		options.cascade
			? await typewriterEffect(element, options)
			: typewriterEffect(element, options)
	}

	if (options.cascade) {
		options.dispatch('done')
	} else {
		const { currentNode: lastElementToFinish } = elements.reduce(
			(longestTextElement, element) => {
				const longestTextLength = longestTextElement.text.length
				return element.text.length > longestTextLength
					? (longestTextElement = element)
					: longestTextElement
			}
		)

		const observer = new MutationObserver(mutations => {
			mutations.forEach(mutation => {
				const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
				if (mutation.type === 'attributes' && lastElementFinishedTyping) {
					options.dispatch('done')
				}
			})
		})

		observer.observe(lastElementToFinish, {
			attributes: true,
			childList: true,
			subtree: true
		})
	}
}
