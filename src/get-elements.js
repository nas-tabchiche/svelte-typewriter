import { hasSingleTextNode } from './utils'

export const getElements = parentElement => {
	const elements = []
	const treeWalker = document.createTreeWalker(parentElement, NodeFilter.SHOW_ELEMENT)
	let currentNode = treeWalker.nextNode()
	while (currentNode) {
		const text = currentNode.textContent.split('')
		hasSingleTextNode(currentNode) && elements.push({ currentNode, text })
		currentNode = treeWalker.nextNode()
	}
	if (hasSingleTextNode(parentElement)) {
		const text = node.textContent.split('')
		parentElement.textContent = ''
		const childNode = document.createElement('p')
		parentElement.appendChild(childNode)
		elements.push({ currentNode: childNode, text })
	}
	return elements
}
