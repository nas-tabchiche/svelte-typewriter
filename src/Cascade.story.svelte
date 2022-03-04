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
    let cascade = true
</script>

<Variant name="Default mode" description="Typewriter component on default mode">
    <Typewriter {interval} {cursor} {delay} {cascade}>
        <Example />
    </Typewriter>
</Variant>
