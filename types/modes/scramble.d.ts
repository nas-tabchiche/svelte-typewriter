import type { TypewriterProps } from '../typewriter'

type ScrambleMode = (parentElement: Element, props: TypewriterProps) => void

export const scramble: ScrambleMode
