<script>
  import Typewriter from 'svelte-typewriter'

  export let interval = 30
  export let cascade = false
  export let loop = false
  export let loopRandom = false
  export let scramble = false
  export let scrambleSlowdown = true
  export let cursor = true
  export let delay = 0

  $: props = { interval, cascade, loop, loopRandom, scramble, scrambleSlowdown, cursor, delay }
</script>

{#if scramble}
    <b>Duration:</b>
    <input type="number" bind:value={scramble} />
    <b>Ending slowdown:</b>
    <input type="checkbox" bind:checked={scrambleSlowdown} />
{:else}
    <b>Interval:</b>
    <input type="number" bind:value={interval} />

    <b>Cursor:</b>
    <input type="color" bind:value={cursor} />

    <b>Delay:</b>
    <input type="number" bind:value={delay} />
{/if}

<Typewriter {...props}>
  <slot />
</Typewriter>
