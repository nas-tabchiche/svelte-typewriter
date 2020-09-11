import { typingInterval, sleep } from './utils'

export const typewriterEffect = async ({ currentNode, text }, options) => {
	currentNode.textContent = ''
	currentNode.classList.add('typing')
	for (const letter of text) {
		currentNode.textContent += letter
		const fullyWritten = options.loop && currentNode.textContent === text.join('')
		if (fullyWritten) {
			options.dispatch('done')
			await sleep(typeof options.loop === 'number' ? options.loop : 1500)
			while (currentNode.textContent !== '') {
				currentNode.textContent = currentNode.textContent.slice(0, -1)
				await typingInterval(options.interval)
			}
			return
		}
		await typingInterval(options.interval)
	}
	if (currentNode.nextSibling !== null || !options.cascade)
		currentNode.classList.length == 1
			? currentNode.removeAttribute('class')
			: currentNode.classList.remove('typing')
}
