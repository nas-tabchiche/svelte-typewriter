<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter loop on:done={() => console.log('Hello World!')}>
  <p>Lorem</p>
  <p>Ipsum</p>
  <p>Dolor</p>
</Typewriter>
