<script>
	import { onMount, setContext, createEventDispatcher } from 'svelte'

	export let interval = 30
	export let cascade = false
	export let loop = false
	export let cursor = true

	const dispatch = createEventDispatcher()

	setContext('options', { interval, cascade, loop, cursor, dispatch })

	let modeComponent

	const loadComponent = () =>
		loop
			? import('./modes/Loop').then(res => (modeComponent = res.default))
			: import('./modes/NonLoop').then(res => (modeComponent = res.default))

	onMount(() => loadComponent())
</script>

<svelte:component this={modeComponent}>
	<slot />
</svelte:component>
