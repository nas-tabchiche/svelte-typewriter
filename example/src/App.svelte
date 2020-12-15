<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter on:done={() => console.log('Hello World!')}>
  some & text...
</Typewriter>
