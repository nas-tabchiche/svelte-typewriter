<script>
	import { createEventDispatcher } from 'svelte'
	import { typewriter } from './core/modes'

	export let interval = 30
	export let cascade = false
	export let loop = false
	export let loopRandom = false
	export let scramble = false
	export let cursor = true
	export let delay = 0

	const dispatch = createEventDispatcher()

	const options = { interval, cascade, loop, loopRandom, scramble, cursor, delay, dispatch }
</script>

<style>
	@keyframes cursorFade {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}

	.cursor :global(.typing::after) {
		content: '▌';
		display: inline-block;
		color: var(--cursor-color);
		animation: cursorFade 1.25s infinite;
	}

	.delay {
		visibility: hidden;
	}
</style>

<div
	use:typewriter={options}
	class:cursor
	class:delay={options.delay > 0}
	style="--cursor-color: {typeof cursor === 'string' ? cursor : 'black'}"
>
	<slot />
</div>
