# svelte-typewriter
> A simple and reusable typewriter effect for your Svelte applications

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[DEMO](https://svelte.dev/repl/9dfb73bfa9b34aeea4740fa23f5cde8a?version=3.14.1)

## Installation

```bash
# yarn
yarn add -D svelte-typewriter

# npm
npm install -D svelte-typewriter
```

## Usage

```svelte
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

[DEMO](https://svelte.dev/repl/eb6caec159cf454b8f2bc98f3444fa8c?version=3.14.1)

#### Example:

```svelte
<Typewriter interval={50}>
	<p>Each letter of this paragraph will be displayed with a interval of 50 milliseconds</p>
</Typewriter>
```

You can also pass a custom array of distinct intervals to mimic human typing

```svelte
<Typewriter interval={[50, 60, 80]}>
	<p>Each letter of this paragraph will be randomly displayed with an interval of 50 or 60 or 80 milliseconds</p>
</Typewriter>
```

### `cascade`

Enables the cascading mode, where each element is animated sequentially instead of simultaneously

default: `false`

[DEMO](https://svelte.dev/repl/9ddb89942e954a2a90b553356952ff46?version=3.14.1)

#### Example:

```svelte
<Typewriter cascade>
	<h1>First</h1>
	<h2>Second</h2>
	<h3>Third</h3>
</Typewriter>
```

### `loop`

Cycles the typewriter animation between the children elements of the `<Typewriter>` component

> **Warning:** won't work if `cascade` is enabled

> When using the `loop` prop, the tag name will be determined by the first child of the `<Typewriter>` component

default: `false`

#### Example:

```svelte
<Typewriter loop>
	<p>This is a draft about the loop typewriter effect</p>
	<p>This is a draft about svelte-typewriter</p>
	<p>This text has nothing to do with the two previous phrases</p>
</Typewriter>
```

You can also pass a custom time interval between loops in milliseconds (the default interval is 1500 milliseconds)

```svelte
<Typewriter loop={500}>
	<p>This is a draft about the loop typewriter effect</p>
	<p>This is a draft about svelte-typewriter</p>
	<p>This text has nothing to do with the two previous phrases</p>
</Typewriter>
```
