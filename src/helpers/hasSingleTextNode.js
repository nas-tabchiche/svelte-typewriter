/// <reference path='../types.js' />

/**
 * Verifies if a given element contains only one text node child
 * @param {HTMLElement} el
 * @example
 * const h1 = document.createElement('h1')
 * h1.textContent = 'Hello World!'
 * hasSingleTextNode(h1) // Returns `true`
 */
const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

export { hasSingleTextNode }
