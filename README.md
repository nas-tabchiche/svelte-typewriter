# svelte-typewriter
> A simple and reusable typewriter effect for your Svelte applications

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[DEMO](https://svelte.dev/repl/eddf80db94da42a0b659c1d1da687665?version=3.14.1)

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

## Options

You can control the behavior of the typewriter effect by passing specific props to the `Typewriter` component

### `interval`

The interval in milliseconds between each letter

default: `30`

#### Example:

```html
<Typewriter interval={50}>
	<p>Each letter of this paragraph will be displayed with a interval of 50 milliseconds</p>
</Typewriter>
```

### `cascade`

Enables the cascading mode, where each element is animated sequentially instead of simultaneously

default: `false`

#### Example:

```html
<Typewriter cascade>
	<h1>First</h1>
	<h2>Second</h2>
	<h3>Third</h3>
</Typewriter>
```
