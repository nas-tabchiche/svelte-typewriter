import rollupCommonConfig from './rollup.config.common'

/** @type {import('rollup').RollupOptions} */
const esmConfig = {
	...rollupCommonConfig,
	output: {
		format: 'esm',
		dir: 'lib/component/esm',
		entryFileNames: 'index.mjs',
		chunkFileNames: '[name].mjs'
	},
	external: ['svelte/internal']
}

const umdConfig = {
	...rollupCommonConfig,
	output: {
		format: 'umd',
		dir: 'lib/component/umd',
		name: 'Typewriter',
		entryFileNames: 'index.js',
		chunkFileNames: '[name].js',
		inlineDynamicImports: true
	}
}

export default [esmConfig, umdConfig]
