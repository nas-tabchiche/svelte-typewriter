import { typescript } from 'svelte-preprocess-esbuild'
import preprocess from 'svelte-preprocess'

export default {
	preprocess: [
		typescript({
			target: 'es2020'
		}),
		preprocess({
			typescript: false
		})
	]
}
