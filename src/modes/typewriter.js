import { writeEffect } from '../helpers/writeEffect'
import { onAnimationEnd } from '../helpers/onAnimationEnd'
import { cleanChildText } from '../helpers/cleanChildText'

/** @type {import('types').TypewriterOptions} */
const mode = async (elements, options) => {
	if (options.cascade) {
		cleanChildText(elements)
	} else {
		const { getLongestTextElement } = await import('../helpers/getLongestTextElement')
		const lastElementToFinish = getLongestTextElement(elements)
		onAnimationEnd(lastElementToFinish, () => options.dispatch('done'))
	}
	for (const element of elements)
		options.cascade ? await writeEffect(element, options) : writeEffect(element, options)
	options.cascade && options.dispatch('done')
}

export { mode }
