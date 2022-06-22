<script context="module">
    export const __pageMeta = {
        title: 'Typewriter',
        description: 'Typewriter component on cascade'
    }
</script>

<script>
    import { Variant } from '@vitebook/client'
    import { ControlsAddon, EventsAddon } from '@vitebook/client/addons'

    import Example from './Example.svelte'

    let interval = 30
    let cursor = true
    let delay = 0
    let disabled = false
</script>

<Variant name="Cascade mode" description="Typewriter component on cascade mode">
    <Example {disabled} cascade {interval} {cursor} {delay} />
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
    <div>
        <b>Disabled</b> <input type="checkbox" bind:checked={disabled} />
    </div>
</ControlsAddon>
