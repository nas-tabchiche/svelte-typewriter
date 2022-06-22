<script context="module">
    export const __pageMeta = {
        title: 'Typewriter',
        description: 'Typewriter component on loop'
    }
</script>

<script>
    import { Variant } from '@vitebook/client'
    import { ControlsAddon, EventsAddon } from '@vitebook/client/addons'

    import Example from './Example.svelte'

    let interval = 30
    let cursor = true
    let delay = 0
    let loopRandom = false
    let unwriteInterval = false
    let disabled = false
</script>

<Variant name="Loop mode" description="Typewriter component on loop mode">
    <Example {disabled} {interval} {cursor} {delay} loop={!loopRandom} {loopRandom} {unwriteInterval} />
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
        <b>Loop randomly</b> <input type="checkbox" bind:checked={loopRandom} />
    </div>
    <div>
        <b>Unwrite interval</b> <input type="number" bind:value={unwriteInterval} />
    </div>
    <div>
        <b>Disabled</b> <input type="checkbox" bind:checked={disabled} />
    </div>
</ControlsAddon>
