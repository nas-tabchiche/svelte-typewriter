<script>
	import Typewriter from '../Typewriter'
</script>

<Typewriter on:done={() => console.log('Hello World!')} loop>
	<h1>Foobar</h1>
	<p>Hello World!</p>
	<nav>
		<a href="/">Lorem ipsum</a>
		<a href="/">Dolor sit</a>
		<a href="/">Amet consectetur</a>
	</nav>
</Typewriter>
