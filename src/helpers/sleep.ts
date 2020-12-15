/**
 * Waits for a given amount of time
 * @param {number} ms The time in milliseconds to wait before resuming execution
 * @example
 *  const someFunction = () => {
 *    // Waits for 1 second before resuming execution
 *    await sleep(1000)
 *  }
 */
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms))

export { sleep }
