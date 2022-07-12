import type { TypewriterProps } from '../typewriter'

type LoopMode = (parentElement: Element, props: TypewriterProps) => void

export const loop: LoopMode
