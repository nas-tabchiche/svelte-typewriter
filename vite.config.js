import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production'
	return {
		build: {
			lib: {
				entry: './src/Typewriter.svelte',
				formats: ['es', 'cjs']
			},
			outDir: './lib',
			polyfillDynamicImport: false,
			cssCodeSplit: false,
			minify: isProduction
		},
		extensions: ['html', 'js', 'css'],
		resolve: {
			alias: {
				svelte: resolve(__dirname, 'node_modules/svelte'),
				'@svelte-typewriter': resolve(__dirname, 'src')
			}
		},
		plugins: [
			svelte({
				hot: !isProduction,
				emitCss: true
			})
		]
	}
})
