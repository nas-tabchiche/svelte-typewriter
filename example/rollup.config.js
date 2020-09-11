import svelte from 'rollup-plugin-svelte-hot'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import hmr from 'rollup-plugin-hot'
import { terser } from 'rollup-plugin-terser'

/** @type {import('rollup').RollupOptions} */
const options = {
	input: 'index.js',
	output: {
		format: 'esm',
		name: 'app',
		dir: 'build'
	},
	plugins: [
		svelte({
			dev: true,
			css: css => css.write('build/bundle.css', false),
			hot: {
				optimistic: true,
				noPreserveState: false
			}
		}),
		hmr({
			public: './',
			inMemory: true,
			compatModuleHot: false
		}),
		serve(),
		resolve({
			browser: true,
			dedupe: ['svelte'],
			customResolveOptions: {
				moduleDirectory: ['src', 'node_modules'],
				extensions: ['.svelte', '/index.svelte', '.mjs', '.js', '.json']
			}
		}),
		commonjs(),
		terser()
	]
}

function serve() {
	let started = false
	return {
		name: 'svelte/template:serve',
		writeBundle() {
			if (!started) {
				started = true
				const flags = ['run', 'start', '--', '--dev']
				require('child_process').spawn('npm', flags, {
					stdio: ['ignore', 'inherit', 'inherit'],
					shell: true
				})
			}
		}
	}
}

export default options
