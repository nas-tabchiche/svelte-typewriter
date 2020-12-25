import { writeEffect, onAnimationEnd } from '@svelte-typewriter/helpers'
import type { TypewriterElement, TypewriterModeFn } from '@svelte-typewriter/types'

type CleanChildText = (elements: TypewriterElement[]) => void

const cleanChildText: CleanChildText = elements =>
	elements.forEach(element => (element.currentNode.textContent = ''))

const mode: TypewriterModeFn = async (elements, options) => {
	if (options.cascade) {
		cleanChildText(elements)
	} else {
		const { getLongestTextElement } = await import('@svelte-typewriter/helpers')
		const lastElementToFinish = getLongestTextElement(elements)
		onAnimationEnd(lastElementToFinish, () => options.dispatch('done'))
	}
	for (const element of elements)
		options.cascade ? await writeEffect(element, options) : writeEffect(element, options)
	options.cascade && options.dispatch('done')
}

export { mode }
