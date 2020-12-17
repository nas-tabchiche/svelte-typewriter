import { writeEffect, hideCursorOnAnimationEnd } from '@svelte-typewriter/helpers'
import type { TypewriterModeFn } from '@svelte-typewriter/types'

const cascade: TypewriterModeFn = async ({ elements }, options) => {
	elements.forEach(element => (element.currentNode.textContent = ''))
	for (const element of elements) {
		await writeEffect(element, options)
		hideCursorOnAnimationEnd(element.currentNode)
	}
	options.dispatch('done')
}

export default cascade
