# svelte-typewriter
> A simple and reusable typewriter effect for your Svelte applications

[DEMO](https://svelte.dev/repl/eddf80db94da42a0b659c1d1da687665?version=3.14.0)

## Installation

```bash
# yarn
yarn add -D svelte-typewriter

# npm
npm install --save-dev svelte-typewriter
```

## Usage

```html
<script>
	import Typewriter from 'svelte-typewriter'
</script>

<Typewriter>
	<h1>Testing the typewriter effect</h1>
	<h2>The typewriter effect cascades by default</h2>
	<p>Lorem ipsum dolor sit amet consectetur</p>
</Typewriter>
```

## TODO

- Pass a option through props to enable/disable typewriting cascading effect
