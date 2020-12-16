type CleanChildNodes = (node: HTMLElement) => void

const cleanChildNodes: CleanChildNodes = node => node.childNodes.forEach(el => el.remove())

export { cleanChildNodes }
