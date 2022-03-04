<script context="module">
    export const __pageMeta = {
        title: 'Typewriter',
        description: 'Typewriter component'
    }
</script>

<script>
    import { Variant } from '@vitebook/client'
    import { ControlsAddon, EventsAddon } from '@vitebook/client/addons'

    import Typewriter from './Typewriter.svelte'
    import Example from './Example.svelte'

    let interval
    let cursor
    let delay
</script>

<Variant name="Default mode" description="Typewriter component on default mode">
    <Typewriter {interval} {cursor} {delay}>
        <Example />
    </Typewriter>
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
