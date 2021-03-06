import path from 'path'
import esbuild from 'esbuild'
import sveltePlugin from 'esbuild-svelte'
import preprocess from 'svelte-preprocess'

/** @type {import('esbuild').Plugin} */
const dedupeSveltePlugin = {
	name: 'dedupe-svelte-plugin',
	setup(build) {
		build.onResolve({ filter: /^svelte(\/[\a-zA-Z0-9@-]+)?$/ }, args => ({
			path: path.resolve(process.cwd(), 'node_modules', args.path, 'index.js')
		}))
	}
}

const build = async () => {
	await esbuild.build({
		entryPoints: ['./src/index.js'],
		bundle: true,
		format: 'esm',
		splitting: true,
		outbase: './src',
		outdir: './public/build',
		minify: true,
		plugins: [
			sveltePlugin({
				preprocessor: [preprocess()]
			}),
			dedupeSveltePlugin
		]
	})
}

build()
