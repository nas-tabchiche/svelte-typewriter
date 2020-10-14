/**
 *
 * @typedef {Object} TypewriterElement
 * @property {HTMLElement} currentNode The element to apply the animation
 * @property {string[]} text The element .textContent() into an array
 */

/**
 * @typedef {Object} TypewriterParentData
 * @property {HTMLElement} node The parent element
 * @property {TypewriterElement[]} elements Elements and texts to be animated
 */

/**
 * The options object
 * @typedef {Object} TypewriterOptions
 * @property {number|number[]} interval The interval between keystrokes
 * @property {boolean} cascade Toggles the `cascade` animation mode
 * @property {boolean|number} loop Toggles the `loop` animation mode (if it's a number, sets the interval on each word reset)
 * @property {boolean|string} cursor Toggles the `cursor` animation effect (if it's a string, sets the cursor color)
 * @property {number} delay The interval before the beginning of the animation
 * @property {(type: string, detail?: any) => void} dispatch Svelte's dispatch function
 */

/** @typedef {(parentData: TypewriterParentData, options: TypewriterOptions) => Promise<any>} TypewriterModeFn */

/** @typedef {(element: TypewriterElement, options: TypewriterOptions) => Promise<any>} TypewriterEffectFn */
