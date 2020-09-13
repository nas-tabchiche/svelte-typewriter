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

<div
	use:typewriter={options}
	class:cursor
	style="--cursor-color: {typeof cursor === 'string' ? cursor : 'black'}"
>
	<slot />
</div>
