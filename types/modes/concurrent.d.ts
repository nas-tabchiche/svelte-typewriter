import type { TypewriterProps } from '../typewriter'

type ConcurrentMode = (parentElement: Element, props: TypewriterProps) => void

export const concurrent: ConcurrentMode
