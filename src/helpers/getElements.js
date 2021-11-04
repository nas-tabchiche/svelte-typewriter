import { hasSingleTextNode } from './hasSingleTextNode'

/** @type {import(types').GetElements} */
const getElements = node => {
	if (hasSingleTextNode(node)) {
		const textWithFilteredAmpersand = node.innerHTML.replaceAll('&amp;', '&')
		return { currentNode: node, text: textWithFilteredAmpersand }
	} else {
		const children = [...node.children]
		const allChildren = children.flatMap(getElements)
		return allChildren
	}
}

export { getElements }
