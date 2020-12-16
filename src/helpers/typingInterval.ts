import { sleep, rng } from '@svelte-typewriter/helpers'

type TypingInterval = (interval: number | number[]) => Promise<unknown>

const typingInterval: TypingInterval = async interval =>
	sleep(Array.isArray(interval) ? interval[rng(0, interval.length)] : interval)

export { typingInterval }
