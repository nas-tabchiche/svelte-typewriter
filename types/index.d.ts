import type { SvelteComponentTyped } from 'svelte'
import type { TypewriterProps, TypewriterEvents, TypewriterSlots } from './typewriter'

export * from './helpers'
export * from './modes'

export default class Typewriter extends SvelteComponentTyped<TypewriterProps, TypewriterEvents, TypewriterSlots> {}
