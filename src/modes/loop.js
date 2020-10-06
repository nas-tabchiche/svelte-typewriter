import { typingInterval, sleep } from '../utils'

const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

const typewriterEffect = async ({ currentNode, text }, options) => {
	currentNode.textContent = ''
	currentNode.classList.add('typing')
	for (const letter of text) {
		currentNode.textContent += letter
		const fullyWritten = currentNode.textContent === text.join('')
		if (fullyWritten) {
			options.dispatch('done')
			await sleep(typeof options.loop === 'number' ? options.loop : 1500)
			while (currentNode.textContent !== '') {
				currentNode.textContent = currentNode.textContent.slice(0, -1)
				await typingInterval(options.interval)
			}
		}
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

export default async ({ node, elements }, options) => {
	while (options.loop) {
		for (const { currentNode, text } of elements) {
			cleanChildNodes(node)
			const loopParagraphTag = currentNode.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			loopParagraph.textContent = text.join('')
			node.appendChild(loopParagraph)
			await typewriterEffect({ currentNode: loopParagraph, text }, options)
			node.childNodes.forEach(el => el.remove())
			cleanChildNodes(node)
		}
	}
}
