type CreateElement = (text: string, elementTag: string) => HTMLElement

const createElement: CreateElement = (text, elementTag) => {
	const element = document.createElement(elementTag)
	element.textContent = text
	return element
}

export { createElement }
