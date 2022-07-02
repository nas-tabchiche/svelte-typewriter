<script context="module">
    import {
        concurrent,
        cascade,
        loop,
        loopOnce,
        loopRandom,
        scramble
    } from './modes'

    export {
        concurrent,
        cascade,
        loop,
        loopOnce,
        loopRandom,
        scramble
    }
</script>

<script>
    export let mode = "concurrent"

    $: isLoopMode = /^loop(Once|Random)?$/.test(mode)

    // general-purpose props
	export let interval = 30
	export let cursor = true
	export let delay = 0
    export let disabled = false
    export let element = "div"

    // mode-specific props
    export let scrambleDuration = mode === "scramble" ? 3000 : 0
    export let scrambleSlowdown = mode === "scramble" ? true : false
	export let unwriteInterval = isLoopMode ? 30 : 0
    export let wordInterval = isLoopMode ? 1500 : 0

    const modes = {
        concurrent: () => import("./modes/concurrent.js"),
        cascade: () => import("./modes/cascade.js"),
        loop: () => import("./modes/loop.js"),
        loopOnce: () => import("./modes/loopOnce.js"),
        loopRandom: () => import("./modes/loopRandom.js"),
        scramble: () => import("./modes/scramble.js")
    }

    $: if (!isLoopMode && (unwriteInterval || wordInterval)) {
        console.log(mode, unwriteInterval, wordInterval)
        console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' can only be used on loop mode")
    }

    $: if (mode !== "scramble" && (scrambleDuration || scrambleSlowdown))
        console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' can only be used on scramble mode")

    $: delayPromise = () => new Promise(resolve => setTimeout(() => resolve(delay), delay))
</script>

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
        background-color: var(--cursor-color, black);
        animation: cursorFade 1.25s infinite;
    }
</style>

<svelte:options accessors />

<noscript>
    <slot />
</noscript>

{#key $$props}
    {#if disabled}
        <div class="typewriter-container">
            <slot />
        </div>
    {:else}
        {#await delayPromise() then delay}
            {#await modes[mode]() then selectedMode}
                <svelte:element this={element} use:selectedMode.default={$$props} class:cursor class="typewriter-container">
                    <slot />
                </svelte:element>
            {/await}
        {/await}
    {/if}
{/key}
