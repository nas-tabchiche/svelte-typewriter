<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter on:done={() => console.log('Hello World!')}>
  <p>Lorem & Ipsum</p>
  <p>Dolor & Sit</p>
  <p>Amet & Consectetur... And a lot of some random text just to test if my code works</p>
</Typewriter>
