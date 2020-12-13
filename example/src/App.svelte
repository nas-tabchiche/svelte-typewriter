<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter loop on:done={() => console.log('Hello World!')}>
  <div>some text...</div>
  <span>
    <a href='user'>some link</a>
    <a href='user'>yet another link</a>
  </span>
</Typewriter>
