<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter loopRandom on:done={() => console.log('Hello World!')}>
  <div>some text...</div>
  <div>Foo</div>
  <a href="user">some link</a>
  <a href="user">yet another link</a>
  <div>Bar</div>
</Typewriter>
