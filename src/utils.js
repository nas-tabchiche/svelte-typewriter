export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)

export const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

export const typingInterval = async interval => sleep(interval[rng(0, interval.length)] || interval)

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
