<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<Typewriter scramble on:done={() => console.log('Hello World!')}>
	<div>some text...</div>
	<div>
		Foo
		<span>
      <a href="user">some link</a> <a href="user">yet another link</a>
    </span>
		Bar
	</div>
</Typewriter>
