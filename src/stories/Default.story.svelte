<script context="module">
    export const __pageMeta = {
        title: 'Typewriter',
        description: 'Typewriter component on default mode'
    }
</script>

<script>
    import { Variant } from '@vitebook/client'
    import { ControlsAddon, EventsAddon } from '@vitebook/client/addons'

    import Example from './Example.svelte'

    let interval
    let cursor
    let delay
</script>

<Variant name="Default mode" description="Typewriter component on default mode">
    <Example {interval} {cursor} {delay} />
</Variant>

<ControlsAddon>
    <div>
        <b>Interval</b> <input type="number" bind:value={interval} />
    </div>
    <div>
        <b>Cursor</b> <input type="color" bind:value={cursor} />
    </div>
    <div>
        <b>Delay</b> <input type="number" bind:value={delay} />
    </div>
</ControlsAddon>
