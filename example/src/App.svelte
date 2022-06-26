<script>
    import { afterUpdate } from 'svelte'

    import Typewriter from "../../src/Typewriter.svelte"
    import CustomizationPanel from "./components/CustomizationPanel.svelte"
    import Input from "./components/Input.svelte"

    let interval = 30
    let cursor = false
    let delay = 0
    let disabled = false
</script>

<Typewriter {interval} {cursor} {delay} {disabled} loop>
    <h1>Hello world!</h1>
</Typewriter>

<CustomizationPanel>
    <Input bind:value={interval} label="Interval" type="number" />
    <Input bind:value={delay} label="Delay" type="number" />
    <Input bind:value={cursor} label="Cursor" type="checkbox" />
    <Input bind:value={disabled} label="Disabled" type="checkbox" />
</CustomizationPanel>
