import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
  // deploys to "https://henriquehbr.github.io/svelte-typewriter"
  base: "/svelte-typewriter/"
})
