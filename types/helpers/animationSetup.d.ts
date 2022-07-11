import { TypewriterProps, TypewriterElement } from './typewriter'

type AnimationSetupOptions = {
    parentElement: Element
    dispatch: (type: string) => void
} & TypewriterProps

type AnimationSetup = (parentElement: Element, props: TypewriterProps) => {
    options: AnimationSetupOptions
    elements: TypewriterElement[]
}

export { AnimationSetup, AnimationSetupOptions }
