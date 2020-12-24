import { sleep } from './sleep'
import { rng } from './rng'

type TypingInterval = (interval: number | number[]) => Promise<unknown>

const typingInterval: TypingInterval = async interval =>
	sleep(Array.isArray(interval) ? interval[rng(0, interval.length)] : interval)

export { typingInterval }
