type CleanChildNodes = (node: HTMLElement) => void

const cleanChildNodes: CleanChildNodes = node => node.childNodes.forEach((el: any) => el.remove())

export { cleanChildNodes }
