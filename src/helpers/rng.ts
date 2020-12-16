type RandomNumberGenerator = (min: number, max: number) => number

const rng: RandomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min) + min)

export { rng }
