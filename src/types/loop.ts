import type { TypewriterElement, TypewriterOptions } from './typewriter'

type GetRandomText = (element: TypewriterElement[]) => TypewriterElement

type LoopAnimation = (
	parentElement: Element,
	element: TypewriterElement,
	options: TypewriterOptions
) => Promise<void>

export { GetRandomText, LoopAnimation }
