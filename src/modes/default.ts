import { typingInterval } from '@svelte-typewriter/helpers'
import type { TypewriterEffectFn, TypewriterModeFn } from '@svelte-typewriter/types'

// Unify the function below with the one on default mode
const typewriterEffect: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

const defaultMode: TypewriterModeFn = async ({ elements }, options) => {
	for (const element of elements) typewriterEffect(element, options)

	// Modularize this
	const { currentNode: lastElementToFinish } = elements.reduce((longestTextElement, element) => {
		const longestTextLength = longestTextElement.text.length
		return element.text.length > longestTextLength
			? (longestTextElement = element)
			: longestTextElement
	})

	const observer = new MutationObserver(mutations => {
		mutations.forEach((mutation: any) => {
			const elementAttributeChanged = mutation.type === 'attributes'
			const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
			if (elementAttributeChanged && lastElementFinishedTyping) {
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

export default defaultMode
