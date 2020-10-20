<script>
	import Typewriter from 'Typewriter.svelte'
</script>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
	}
	:global(body) {
		background-color: black;
		height: 100vh;
		display: grid;
		place-items: center;
		cursor: default;
	}
	p {
		font-family: monospace;
		font-size: 4em;
		color: rgb(30, 200, 30);
		text-align: center;
		padding: 0 30px;
	}
	@media (max-width: 700px) {
		p {
			font-size: 3em;
		}
	}
	@media (max-width: 550px) {
		p {
			font-size: 2em;
		}
	}
</style>

<Typewriter scramble on:done={() => console.log('Hello World!')}>
	<p>YOU HAVE BEEN HACKED</p>
	<p>Time for a better firewall</p>
</Typewriter>
