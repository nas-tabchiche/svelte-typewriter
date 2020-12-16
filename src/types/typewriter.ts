interface TypewriterElement {
	currentNode: Element
	text: string
}

interface TypewriterParentData {
	node: HTMLElement
	elements: TypewriterElement[]
}

interface TypewriterOptions {
	interval: number | number[]
	cascade: boolean
	loop: boolean | number
	loopRandom: boolean | number
	scramble: boolean
	cursor: boolean | string
	delay: number
	dispatch: (type: string, detail?: any) => void
}

type TypewriterEffectFn = (element: TypewriterElement, options: TypewriterOptions) => Promise<void>

type TypewriterModeFn = (
	parentData: TypewriterParentData,
	options: TypewriterOptions
) => Promise<void>

type TypewriterMainFn = (node: HTMLElement, options: TypewriterOptions) => void

export {
	TypewriterElement,
	TypewriterParentData,
	TypewriterOptions,
	TypewriterEffectFn,
	TypewriterModeFn,
	TypewriterMainFn
}
