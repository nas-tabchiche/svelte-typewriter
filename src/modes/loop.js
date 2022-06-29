import { writeAndUnwriteText } from '../helpers/writeAndUnwriteText'
import { animationSetup } from '../helpers/animationSetup'

const loop = async (node, props) => {
	const { options, elements } = animationSetup(node, props)

	while (true) {
		for (const element of elements) await writeAndUnwriteText(element, options)
	}
}

export default loop
