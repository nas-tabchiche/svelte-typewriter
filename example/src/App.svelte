<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter loop on:done={() => console.log('Hello World!')}>
  <p>Lorem & Ipsum</p>
  <p>Dolor & Sit</p>
  <p>Amet & Consectetur</p>
</Typewriter>
