type Sleep = (ms: number) => Promise<void>

const sleep: Sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export { sleep }
