import { writeEffect } from '../helpers/writeEffect'
import { cleanChildText } from '../helpers/cleanChildText'
import { animationSetup } from '../helpers/animationSetup'

const cascade = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	cleanChildText(elements)

	for (const element of elements) {
		await writeEffect(element, options)
		element.currentNode.classList.replace('typing', 'finished-typing')
	}

	options.dispatch('done')
}

export default cascade
