import { getLongestTextElement } from '../helpers/getLongestTextElement'
import { writeEffect } from '../helpers/writeEffect'
import { onAnimationEnd } from '../helpers/onAnimationEnd'
import { animationSetup } from '../helpers/animationSetup'

// the name "default" cannot be used due to being a js keyword
const concurrent = (node, props) => {
	const { options, elements } = animationSetup(node, props)

	const lastElementToFinish = getLongestTextElement(elements)
	onAnimationEnd(lastElementToFinish, () => options.dispatch('done'))

	for (const element of elements) {
		writeEffect(element, options).then(() => {
			element.currentNode.classList.replace('typing', 'finished-typing')
		})
	}
}

export default concurrent
