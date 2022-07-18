<script>
    export let label
    export let value
    export let type
</script>

<div class="input-container">
    <span>{label}</span>
    {#if type === "number"}
        <input bind:value type="number" />
    {:else if type === "text"}
        <input bind:value type="text" />
    {:else if type === "color"}
        <input bind:value type="color" />
    {:else if type === "checkbox"}
        <input bind:checked={value} type="checkbox" />
    {/if}
</div>
