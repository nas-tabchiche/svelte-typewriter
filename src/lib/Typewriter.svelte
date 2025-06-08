<script>
	import { run } from 'svelte/legacy'

	import '@formatjs/intl-segmenter/polyfill'

	/**
	 * @typedef {Object} Props
	 * @property {string} [mode]
	 * @property {number} [interval] - general-purpose props
	 * @property {boolean} [cursor]
	 * @property {boolean} [keepCursorOnFinish]
	 * @property {number} [delay]
	 * @property {boolean} [showCursorOnDelay]
	 * @property {boolean} [disabled]
	 * @property {string} [element]
	 * @property {number} [scrambleDuration] - mode-specific props
	 * @property {boolean} [scrambleSlowdown]
	 * @property {number} [unwriteInterval]
	 * @property {number} [wordInterval]
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let {
		mode = 'concurrent',
		interval = 30,
		cursor = true,
		keepCursorOnFinish = false,
		delay = 0,
		showCursorOnDelay = false,
		disabled = false,
		element = 'div',
		scrambleDuration = 3000,
		scrambleSlowdown = true,
		unwriteInterval = 30,
		wordInterval = 1500,
		children
	} = $props()

	let isLoopMode = $derived(/^loop(Once|Random)?$/.test(mode))

	// these modes stop once all given elements have finished their animations
	// and support the cursor
	let isFiniteCursorMode = $derived(['concurrent', 'cascade', 'loopOnce'].includes(mode))

	let invalidCursorOnFinish = $derived(!isFiniteCursorMode && keepCursorOnFinish)
	let invalidCursorOnDelay = $derived(delay < 1 && showCursorOnDelay)
	let invalidLoopProps = $derived(!isLoopMode && (unwriteInterval || wordInterval))
	let invalidScrambleProps = $derived(
		mode !== 'scramble' && (scrambleDuration || scrambleSlowdown)
	)
	let unnecessaryCursorOnFinish = $derived(
		typeof keepCursorOnFinish === 'number' && keepCursorOnFinish < 1
	)

	const modes = {
		concurrent: () => import('./modes/concurrent'),
		cascade: () => import('./modes/cascade'),
		loop: () => import('./modes/loop'),
		loopOnce: () => import('./modes/loopOnce'),
		loopRandom: () => import('./modes/loopRandom'),
		scramble: () => import('./modes/scramble')
	}

	run(() => {
		invalidCursorOnFinish &&
			console.warn(
				"[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes"
			)
	})
	run(() => {
		invalidCursorOnDelay &&
			console.warn(
				"[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0"
			)
	})
	run(() => {
		invalidLoopProps &&
			console.warn(
				"[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes"
			)
	})
	run(() => {
		invalidScrambleProps &&
			console.warn(
				"[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode"
			)
	})
	run(() => {
		unnecessaryCursorOnFinish &&
			console.warn(
				"[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1"
			)
	})

	let delayPromise = $derived(
		() => new Promise(resolve => setTimeout(() => resolve(delay), delay))
	)

	let _props = $derived({
		interval,
		cursor,
		keepCursorOnFinish,
		delay,
		showCursorOnDelay,
		disabled,
		element,
		scrambleDuration,
		scrambleSlowdown,
		unwriteInterval,
		wordInterval
	})
</script>

<noscript>
	{@render children?.()}
</noscript>

{#key _props}
	{#if disabled}
		<div class="typewriter-container">
			{@render children?.()}
		</div>
	{:else}
		{#await delayPromise()}
			{#if showCursorOnDelay}
				<div class="typewriter-container cursor">
					<p class="typing"></p>
				</div>
			{/if}
		{:then}
			{#await modes[mode]() then selectedMode}
				<svelte:element
					this={element}
					use:selectedMode.default={_props}
					class:cursor
					class="typewriter-container">
					{@render children?.()}
				</svelte:element>
			{/await}
		{/await}
	{/if}
{/key}

<style>
	@keyframes cursorFade {
		0%,
		100% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}
	}

	.typewriter-container :global(*:not(.typing):not(.finished-typing):not([data-static])) {
		display: none;
	}

	.typewriter-container :global(.finished-typing::after) {
		content: none;
	}

	.cursor :global(.typing::after) {
		content: '';
		width: var(--cursor-width, 1ch);
		height: 2ch;
		display: inline-block;
		vertical-align: text-top;
		background-color: var(--cursor-color, #000000);
		animation: cursorFade 1.25s infinite;
	}
</style>
