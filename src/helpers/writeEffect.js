import { typingInterval } from './typingInterval'
/** @type {import(types').HideCursorOnAnimationEnd} */
const hideCursorOnAnimationEnd = element => element.classList.replace('typing', 'finished-typing')

/** @type {import(types').TypewriterEffectFn} */
const writeEffect = async ({ currentNode, text }, options) => {
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
