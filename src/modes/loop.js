import { typingInterval, sleep } from '../utils'

const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

/**
 *
 * @typedef {Object} TypewriterElement
 * @property {HTMLElement} currentNode The element to apply the animation
 * @property {string[]} text The element .textContent() into an array
 */

/**
 * The options object
 * @typedef {Object} TypewriterOptions
 * @property {number|number[]} interval The interval between keystrokes
 * @property {boolean} cascade Toggles the `cascade` animation mode
 * @property {boolean|number} loop Toggles the `loop` animation mode (if it's a number, sets the interval on each word reset)
 * @property {boolean|string} cursor Toggles the `cursor` animation effect (if it's a string, sets the cursor color)
 * @property {(type: string, detail?: any) => void} dispatch Svelte's dispatch function
 */

/**
 *
 * @param {TypewriterElement} element The element to apply the animation
 * @param {TypewriterOptions} options The animation properties
 */
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
