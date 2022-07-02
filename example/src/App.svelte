<script>
    import Typewriter from "../../src/Typewriter.svelte"
    import CustomizationPanel from "./components/CustomizationPanel.svelte"
    import Input from "./components/Input.svelte"
    import Select from "./components/Select.svelte"

    const isLoopMode = mode => /^loop(Once|Random)?$/.test(mode)

    const props = {
        // general-purpose props
        mode: "concurrent",
        interval: 30,
        delay: 0,
        cursor: true,
        disabled: false,
        element: "div",

        // mode-specific props
        get unwriteInterval() {
            return isLoopMode(this.mode) ? 30 : 0
        },
        get wordInterval() {
            return isLoopMode(this.mode) ? 1500 : 0
        },
        get scrambleDuration() {
            return this.mode === "scramble" ? 3000 : 0
        },
        get scrambleSlowdown() {
            return this.mode === "scramble" ? true : false
        },

        // CSS variables
        "--cursor-width": "1ch",
        "--cursor-color": "black"
    }

    // CSS variables can't be directly destructured to the component
    // due to their syntax
    let cursorWidth = "1ch"
    let cursorColor = "black"
</script>

<Typewriter
    --cursor-width={props["--cursor-width"]}
    --cursor-color={props["--cursor-color"]}
    on:done={() => console.log("The animation has finished!")}
    {...props}>
    <h3 data-static>This text won't be animated</h3>
    <p>Normal text</p>
    <p>&&& Ampersands &&&</p>
    <div>
        <p>Nested content</p>
        <h3 data-static>Neither do this one</h3>
        <ul>
            <li>Yet another nested element</li>
            <li>
                <code>Hello World!</code>
            </li>
        </ul>
    </div>
    <h3 data-static>Immutable!</h3>
</Typewriter>

<CustomizationPanel>
    <Select label="Mode" bind:value={props.mode}>
        <option value="concurrent" selected>Concurrent</option>
        <option value="cascade">Cascade</option>
        <option value="loop">Loop</option>
        <option value="loopOnce">One-time loop</option>
        <option value="loopRandom">Random loop</option>
        <option value="scramble">Scramble</option>
    </Select>
    <Input bind:value={props.interval} label="Interval" type="number" />
    <Input bind:value={props.delay} label="Delay" type="number" />
    <Input bind:value={props.element} label="Container element" type="text" />
    <Input bind:value={props["--cursor-width"]} label="Cursor width" type="text" />
    {#if props.mode === "loop" || props.mode === "loopRandom"}
        <Input bind:value={props.unwriteInterval} label="Unwrite interval" type="number" />
        <Input bind:value={props.wordInterval} label="Word interval" type="number" />
    {/if}
    {#if props.mode === "scramble"}
        <Input bind:value={props.scrambleDuration} label="Scramble duration" type="number" />
        <Input bind:value={props.scrambleSlowdown} label="Scramble slowdown" type="checkbox" />
    {/if}
    <Input bind:value={props.cursor} label="Cursor" type="checkbox" />
    <Input bind:value={props.disabled} label="Disabled" type="checkbox" />
    <Input bind:value={props["--cursor-color"]} label="Cursor color" type="color" />
</CustomizationPanel>
