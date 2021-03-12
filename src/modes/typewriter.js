import { writeEffect } from '@svelte-typewriter/helpers/writeEffect'
import { onAnimationEnd } from '@svelte-typewriter/helpers/onAnimationEnd'

/** @type {import('types').TypewriterOptions} */
const mode = async (elements, options) => {
	if (options.cascade) {
		cleanChildText(elements)
	} else {
		const { getLongestTextElement } = await import(
			'@svelte-typewriter/helpers/getLongestTextElement'
		)
		const lastElementToFinish = getLongestTextElement(elements)
		onAnimationEnd(lastElementToFinish, () => options.dispatch('done'))
	}
	for (const element of elements)
		options.cascade ? await writeEffect(element, options) : writeEffect(element, options)
	options.cascade && options.dispatch('done')
}

export { mode }
