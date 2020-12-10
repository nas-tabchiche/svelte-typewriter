/// <reference path='../types.js' />
import { typingInterval } from '../utils'

// Unify the function below with the one on cascade mode
/** @type {TypewriterEffectFn} */
const typewriterEffect = async ({ currentNode, text }, options) => {
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
}

/** @type {TypewriterModeFn} */
export default async ({ elements }, options) => {
	elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
	for (const element of elements) await typewriterEffect(element, options)
	options.dispatch('done')
}
