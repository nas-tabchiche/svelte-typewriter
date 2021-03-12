/** @type {import(types').CleanChildNodes} */
const cleanChildNodes = node => node.childNodes.forEach(el => el.remove())

export { cleanChildNodes }
