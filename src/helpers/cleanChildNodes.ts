/**
 * Remove all children from a specified element
 * @param {HTMLElement} node The parent element whom children will be removed
 * @example
 * const parent = document.createElement('div')
 * const child = document.createElement('p')
 * parent.appendChild(child)
 * cleanChildNodes(parent)
 */
const cleanChildNodes = (node: any) => node.childNodes.forEach((el: any) => el.remove())

export { cleanChildNodes }
