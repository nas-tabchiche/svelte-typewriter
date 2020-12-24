import { typingInterval } from './typingInterval'
import type { TypewriterEffectFn } from '@svelte-typewriter/types'

type HideCursorOnAnimationEnd = (element: Element) => void

const hideCursorOnAnimationEnd: HideCursorOnAnimationEnd = element =>
	element.classList.replace('typing', 'finished-typing')

const writeEffect: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
	hideCursorOnAnimationEnd(currentNode)
}

export { writeEffect }
