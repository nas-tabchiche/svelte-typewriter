import { typingInterval } from '../utils'

const typewriterEffect = async ({ currentNode, text }, options) => {
	currentNode.textContent = ''
	currentNode.classList.add('typing')
	for (const letter of text) {
		currentNode.textContent += letter
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

export default async ({ elements }, options) => {
	elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
	for (const element of elements) await typewriterEffect(element, options)
	options.dispatch('done')
}
