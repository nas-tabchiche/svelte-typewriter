import type { TypewriterProps } from '../typewriter'

type CascadeMode = (parentElement: Element, props: TypewriterProps) => void

export const cascade: CascadeMode
