<script context="module">
    export const __pageMeta = {
        title: 'Typewriter',
        description: 'Typewriter component on scramble'
    }
</script>

<script>
    import { Variant } from '@vitebook/client'
    import { ControlsAddon, EventsAddon } from '@vitebook/client/addons'

    import Example from './Example.svelte'

    let scramble = true
    let scrambleSlowdown
</script>

<Variant name="Scramble mode" description="Typewriter component on scramble mode">
    <Example {scramble} {scrambleSlowdown} />
</Variant>

<ControlsAddon>
    <div>
        <b>Scramble duration</b> <input type="number" bind:value={scramble} />
    </div>
    <div>
        <b>Slowdown effect</b> <input type="checkbox" bind:checked={scrambleSlowdown} />
    </div>
</ControlsAddon>
