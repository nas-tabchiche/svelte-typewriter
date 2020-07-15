import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
const production = !process.env.ROLLUP_WATCH

export default {
	input: 'index.js',
	output: {
		format: 'esm',
		name: 'app',
		dir: 'build'
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => css.write('build/bundle.css', false)
		}),
		resolve({
			browser: true,
			dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
			customResolveOptions: {
				moduleDirectory: ['src', 'node_modules'],
				extensions: ['.svelte', '/index.svelte', '.mjs', '.js', '.json']
			}
		}),
		commonjs(),
		serve('./'),
		livereload('./'),
		terser()
	]
}
