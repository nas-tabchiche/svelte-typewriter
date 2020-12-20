import { writeEffect, getLongestTextElement } from '@svelte-typewriter/helpers'
import type { TypewriterModeFn } from '@svelte-typewriter/types'

const defaultMode: TypewriterModeFn = async ({ elements }, options) => {
	for (const element of elements) writeEffect(element, options)

	const lastElementToFinish = getLongestTextElement(elements)

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
