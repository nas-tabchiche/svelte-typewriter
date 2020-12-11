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
 * Create a HTML element
 * @param {string} text The text to be inserted into the HTML element
 * @param {string} elementTag The tag name of the newly created HTML element
 * @example
 * convertTextToElement(parent)
 */
export const createElement = (text, elementTag) => {
	const element = document.createElement(elementTag)
	element.textContent = text
	return element
}

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
		const childNode = createElement(parentElement.textContent, 'p')
		parentElement.textContent = ''
		parentElement.appendChild(childNode)
		return [{ currentNode: childNode, text }]
	} else {
		const childElements = [...parentElement.children]
		return childElements.map(currentNode => ({
			currentNode,
			text: currentNode.innerHTML
		}))
	}
}

const unwriteEffect = async (currentNode, options) => {
	const text = currentNode.innerHTML
	for (let index = text.length - 1; index >= 0; index--) {
		const letter = text[index]
		letter === '>' && (index = text.lastIndexOf('<', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
}

/** @type {TypewriterEffectFn} */
export const loopTypewriterEffect = async ({ currentNode, text }, options) => {
	currentNode.textContent = ''
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const letter = text[index]
		letter === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		const fullyWritten = currentNode.innerHTML === text
		if (fullyWritten) {
			options.dispatch('done')
			await sleep(typeof options.loop === 'number' ? options.loop : 1500)
			await unwriteEffect(currentNode, options)
		}
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}
