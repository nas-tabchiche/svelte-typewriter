import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

/** @type {import('rollup').RollupOptions} */
const config = {
	input: 'src/modes/index.ts',
	output: {
		format: 'esm',
		dir: 'lib/core',
		preserveModules: true
	},
	plugins: [
		typescript(),
		resolve({
			browser: true
		}),
		terser()
	]
}

export default config
