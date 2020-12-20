import type { TypewriterElement, TypewriterOptions } from './typewriter'

type LoopAnimation = (
	parentElement: Element,
	element: TypewriterElement,
	options: TypewriterOptions
) => Promise<void>

export { LoopAnimation }
