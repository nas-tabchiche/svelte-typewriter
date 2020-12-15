import svelte from 'rollup-plugin-svelte-hot'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import hmr from 'rollup-plugin-hot'
import analyze from 'rollup-plugin-analyzer'
import { terser } from 'rollup-plugin-terser'

const dev = process.env.ROLLUP_WATCH
const production = !dev

/** @type {import('rollup').RollupOptions} */
const options = {
	input: 'src/index.js',
	output: {
		format: 'es',
		name: 'app',
		dir: 'public/build'
	},
	plugins: [
		svelte({
			dev: !production,
			css: css => css.write('bundle.css', false),
			hot: dev && {
				optimistic: true,
				noPreserveState: false
			}
		}),
		hmr({
			public: './',
			inMemory: true,
			compatModuleHot: !dev
		}),
		dev && serve(),
		resolve({
			browser: true,
			dedupe: ['svelte'],
			moduleDirectories: ['../lib/', 'node_modules']
		}),
		commonjs(),
		production && terser(),
		analyze()
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
