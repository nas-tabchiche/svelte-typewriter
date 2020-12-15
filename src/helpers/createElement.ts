/**
 * Create a HTML element
 * @param {string} text The text to be inserted into the HTML element
 * @param {string} elementTag The tag name of the newly created HTML element
 * @example
 * convertTextToElement(parent)
 */
const createElement = (text: any, elementTag: any) => {
	const element = document.createElement(elementTag)
	element.textContent = text
	return element
}

export { createElement }
