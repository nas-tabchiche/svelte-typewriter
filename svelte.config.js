import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        alias: {
            $components: 'src/components'
        },
        paths: {
            // deploys to "https://henriquehbr.github.io/svelte-typewriter"
            base: '/svelte-typewriter'
        }
    }
}

export default config
