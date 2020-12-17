type CleanChildNodes = (node: Element) => void

const cleanChildNodes: CleanChildNodes = node => node.childNodes.forEach(el => el.remove())

export { cleanChildNodes }
