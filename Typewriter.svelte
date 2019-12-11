<script>
	import { onMount } from 'svelte'
	import typewriter from './typewriter'
	export let interval = 30
	export let cascade = false
	export let loop = false
	
	let typewriterContainer

	onMount(async () => await typewriter(typewriterContainer, { interval, cascade, loop }))
</script>

<div bind:this={typewriterContainer}>
	<slot />
</div>
