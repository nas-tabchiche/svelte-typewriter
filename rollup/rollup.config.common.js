import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import svelte from 'rollup-plugin-svelte'
import analyze from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'

const projectRootDir = path.resolve(__dirname)

/** @type {import('rollup').RollupOptions} */
const config = {
	input: 'lib/Typewriter.svelte',
	plugins: [
		svelte({
			emitCss: false,
			compilerOptions: {
				dev: false
			}
		}),
		alias({
			entries: [
				{
					find: '@svelte-typewriter',
					replacement: path.resolve(projectRootDir, 'lib')
				}
			]
		}),
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		terser(),
		analyze({
			summaryOnly: true
		})
	]
}

export default config
