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
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

export default async ({ elements }, options) => {
	for (const element of elements) typewriterEffect(element, options)
	const { currentNode: lastElementToFinish } = elements.reduce((longestTextElement, element) => {
		const longestTextLength = longestTextElement.text.length
		return element.text.length > longestTextLength
			? (longestTextElement = element)
			: longestTextElement
	})

	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
			if (mutation.type === 'attributes' && lastElementFinishedTyping) {
				options.dispatch('done')
			}
		})
	})

	observer.observe(lastElementToFinish, {
		attributes: true,
		childList: true,
		subtree: true
	})
}
