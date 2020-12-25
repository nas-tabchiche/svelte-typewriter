import type { TypewriterElement, TypewriterOptions } from './typewriter'

type LoopAnimation = (element: TypewriterElement, options: TypewriterOptions) => Promise<void>

export { LoopAnimation }
