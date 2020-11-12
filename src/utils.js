/// <reference path='./types.js' />

/**
 * Waits for a given amount of time
 * @param {number} ms The time in milliseconds to wait before resuming execution
 * @example
 *  const someFunction = () => {
 *    // Waits for 1 second before resuming execution
 *    await sleep(1000)
 *  }
 */
export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

/**
 * Generates a random number between `min` and `max`
 * @param {number} min The minimum value in range
 * @param {number} max The maximum value in range
 * @example
 * // Generates a random number between 10 and 20
 * rng(10, 20)
 */
export const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)

/**
 * Verifies if a given element contains only one text node child
 * @param {HTMLElement} el
 * @example
 * const h1 = document.createElement('h1')
 * h1.textContent = 'Hello World!'
 * hasSingleTextNode(h1) // Returns `true`
 */
export const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

/**
 * Delay for each keystroke during the typewriter animation
 * @param {number|number[]} interval The delay between each letter during typing animation (if is an array, randomly cycles between it's numbers for each letter)
 * @example
 * // Delays the next keystroke for 40 milliseconds
 * typingInterval(40)
 * // Randomly delays the next keystroke for 15, 30 or 45 milliseconds
 * typingInterval([15, 30, 45])
 */
export const typingInterval = async interval => sleep(interval[rng(0, interval.length)] || interval)

/**
 * Remove all children from a specified element
 * @param {HTMLElement} node The parent element whom children will be removed
 * @example
 * const parent = document.createElement('div')
 * const child = document.createElement('p')
 * parent.appendChild(child)
 * cleanChildNodes(parent)
 */
export const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

/**
 * Get children data from `parentElement`
 * @param {HTMLElement} parentElement The element to get children from
 * @example
 * const p = document.createElement('p')
 * p.textContent = 'Lorem ipsum dolor sit consectetur'
 * getElements(p)
 */
export const getElements = parentElement => {
	if (hasSingleTextNode(parentElement)) {
		const text = parentElement.textContent.split('')
		const childNode = document.createElement('p')
		childNode.textContent = parentElement.textContent
		parentElement.textContent = ''
		parentElement.appendChild(childNode)
		return [{ currentNode: childNode, text }]
	} else {
		return [...parentElement.getElementsByTagName('*')]
			.filter(el => hasSingleTextNode(el))
			.map(currentNode => ({ currentNode, text: currentNode.textContent.split('') }))
	}
}

/** @type {TypewriterEffectFn} */
export const loopTypewriterEffect = async ({ currentNode, text }, options) => {
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
