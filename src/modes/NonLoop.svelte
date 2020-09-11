<script>
	import { getContext } from 'svelte'
	import { nonLoop } from '../actions/non-loop'
	import CursorStyle from '../CursorStyle.svelte'

	const options = getContext('options')
</script>

<CursorStyle />

<div
	use:nonLoop={options}
	class:cursor={options.cursor}
	style="--cursor-color: {typeof options.cursor === 'string' ? options.cursor : 'black'}"
>
	<slot />
</div>
