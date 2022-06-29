import { writeAndUnwriteText } from '../helpers/writeAndUnwriteText'
import { getRandomElement } from '../helpers/getRandomElement'
import { animationSetup } from '../helpers/animationSetup'

const loopRandom = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	while (true) {
		const element = getRandomElement(elements)
		await writeAndUnwriteText(element, options)
	}
}

export default loopRandom
