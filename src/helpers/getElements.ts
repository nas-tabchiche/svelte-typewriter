import { hasSingleTextNode, createElement } from '@svelte-typewriter/helpers'

/**
 * Get children data from `parentElement`
 * @param {HTMLElement} parentElement The element to get children from
 * @example
 * const p = document.createElement('p')
 * p.textContent = 'Lorem ipsum dolor sit consectetur'
 * getElements(p)
 */
const getElements = (parentElement: any) => {
	if (hasSingleTextNode(parentElement)) {
		const text = parentElement.textContent
		const childNode = createElement(parentElement.textContent, 'p')
		parentElement.textContent = ''
		parentElement.appendChild(childNode)
		return [{ currentNode: childNode, text }]
	} else {
		const childElements = [...parentElement.children]
		return childElements.map(currentNode => {
			const textWithFilteredAmpersand = currentNode.innerHTML.replaceAll('&amp;', '&')
			return {
				currentNode,
				text: textWithFilteredAmpersand
			}
		})
	}
}

export { getElements }
