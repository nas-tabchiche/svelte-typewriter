import path from 'path'

import { defineConfig } from 'vite'
import svelte from '@svitejs/vite-plugin-svelte'
import { minify } from 'html-minifier'

const htmlMinifier = () => ({
	name: 'html-transform',
	transformIndexHtml(html) {
		return minify(html, {
			collapseWhitespace: true,
			removeComments: true,
			removeAttributeQuotes: true,
			collapseBooleanAttributes: true,
			minifyURLs: true,
			minifyCSS: true,
			minifyJS: true
		})
	}
})

export default defineConfig(({ mode }) => {
	const isProduction = mode === 'production'
	return {
		build: {
			polyfillDynamicImport: false,
			cssCodeSplit: false,
			minify: isProduction
		},
		extensions: ['html', 'js', 'css'],
		resolve: {
			alias: {
				svelte: path.resolve(__dirname, 'node_modules/svelte'),
				'@example': path.resolve(__dirname, 'src'),
				'@svelte-typewriter': path.resolve(__dirname, '..', 'src')
			}
		},
		plugins: [
			svelte({
				hot: !isProduction,
				emitCss: true
			}),
			htmlMinifier()
		],
		build: {
			minify: isProduction
		}
	}
})
