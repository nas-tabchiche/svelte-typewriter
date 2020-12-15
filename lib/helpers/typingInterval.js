import { sleep } from './sleep';
import { rng } from './rng';
const typingInterval = async (interval) => sleep(interval[rng(0, interval.length)] || interval);
export { typingInterval };
