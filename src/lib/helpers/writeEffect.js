import { typingInterval } from './typingInterval'
import { runOnEveryParentUntil } from '../helpers/runOnEveryParentUntil'

/** @type {import(types').TypewriterEffectFn} */
const writeEffect = async ({ currentNode, text }, options) => {
	runOnEveryParentUntil(currentNode, options.parentElement, element => {
		const classToAdd = currentNode === element ? 'typing' : 'finished-typing'
		element.classList.add(classToAdd)
	})

	for (let index = 0; index <= text.length; index++) {
		const letter = text[index]

		const letterSizeInBytes = new Blob([letter]).size
		const isSpecialCharacter = letterSizeInBytes > 1

		if (isSpecialCharacter) continue

		letter === '<' && (index = text.indexOf('>', index))

		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}

	currentNode.innerHTML = text
}

export { writeEffect }
