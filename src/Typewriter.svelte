<script>
	import { createEventDispatcher } from 'svelte'
	import { typewriter } from './actions'

	export let interval = 30
	export let cascade = false
	export let loop = false
	export let cursor = true

	const dispatch = createEventDispatcher()

	$: options = { interval, cascade, loop, cursor, dispatch }
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
</style>

<div
	use:typewriter={options}
	class:cursor
	style="--cursor-color: {typeof cursor === 'string' ? cursor : 'black'}"
>
	<slot />
</div>
