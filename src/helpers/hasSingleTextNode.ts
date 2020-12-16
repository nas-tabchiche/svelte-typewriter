type HasSingleTextNode = (el: HTMLElement) => boolean

const hasSingleTextNode: HasSingleTextNode = el =>
	el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

export { hasSingleTextNode }
