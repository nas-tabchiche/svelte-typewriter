type IsInRange = (val: number, minMaxRange: [min: number, max: number]) => boolean

const isInRange: IsInRange = (val, [min, max]) => val >= min && val <= max

export { isInRange }
