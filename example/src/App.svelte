<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter loop on:done={() => console.log('Hello World!')}>
  some & text...
</Typewriter>
