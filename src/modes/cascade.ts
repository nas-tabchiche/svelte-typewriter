import { typingInterval } from '@svelte-typewriter/helpers'
import type { TypewriterEffectFn, TypewriterModeFn } from '@svelte-typewriter/types'

// Unify the function below with the one on cascade mode
const typewriterEffect: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

const cascade: TypewriterModeFn = async ({ elements }, options) => {
	elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
	for (const element of elements) await typewriterEffect(element, options)
	options.dispatch('done')
}

export default cascade
