type HideCursorOnAnimationEnd = (element: Element) => void

const hideCursorOnAnimationEnd: HideCursorOnAnimationEnd = element =>
	element.nextSibling !== null && element.classList.length == 1
		? element.removeAttribute('class')
		: element.classList.remove('typing')

export { hideCursorOnAnimationEnd }
