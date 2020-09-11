<script>
	import { onDestroy, getContext } from 'svelte'
	import { loop } from '../actions/loop'
	import CursorStyle from '../CursorStyle.svelte'

	const options = getContext('options')

	onDestroy(() => (options.loop = false))
</script>

<CursorStyle />

<div
	use:loop={options}
	class:cursor={options.cursor}
	style="--cursor-color: {typeof options.cursor === 'string' ? options.cursor : 'black'}"
>
	<slot />
</div>
