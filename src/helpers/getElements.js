import { hasSingleTextNode } from './hasSingleTextNode'

const filterOutStaticElements = child => child.dataset.static === undefined

/** @type {import(types').GetElements} */
const getElements = node => {
	if (hasSingleTextNode(node)) {
		const textWithFilteredAmpersand = node.innerHTML.replaceAll('&amp;', '&')
		return { currentNode: node, text: textWithFilteredAmpersand }
	} else {
		const children = [...node.children].filter(filterOutStaticElements)
		const allChildren = children.flatMap(getElements)
		return allChildren
	}
}

export { getElements }
