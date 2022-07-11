interface TypewriterProps {
    // general-purpose props
    mode?: "concurrent" | "cascade" | "loop" | "loopOnce" | "loopRandom" | "scramble"
    interval?: number | number[]
	cursor?: boolean
    keepCursorOnFinish?: boolean
	delay?: number
    showCursorOnDelay?: boolean
    disabled?: boolean

    // mode-specific props
    scrambleDuration?: number
    scrambleSlowdown?: boolean
	unwriteInterval?: number
    wordInterval?: number
}

interface TypewriterEvents {
    done: CustomEvent<any>
}

interface TypewriterSlots {
    default: {}
}

interface TypewriterElement {
	currentNode: Element
	text: string
}

interface TypewriterOptions extends TypewriterProps {
	dispatch: (type: string, detail?: any) => void
}

type TypewriterEffectFn = (element: TypewriterElement, options: TypewriterOptions) => Promise<void>

type TypewriterMainFn = (node: Element, options: TypewriterOptions) => Promise<void>

type TypewriterModeFn = (elements: TypewriterElement[], options: TypewriterOptions) => Promise<void>

export {
	TypewriterElement,
	TypewriterOptions,
	TypewriterEffectFn,
	TypewriterMainFn,
	TypewriterModeFn,
    TypewriterProps,
    TypewriterEvents,
    TypewriterSlots
}
