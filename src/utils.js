export const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)

export const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

export const typingInterval = async interval => sleep(interval[rng(0, interval.length)] || interval)
