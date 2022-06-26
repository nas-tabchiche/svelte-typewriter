<script>
    export let label
    export let value
    export let type
</script>

<style>
    .input-container {
        display: flex;
        align-items: center;
        margin: 8px auto;
        gap: 12px;
    }

    .input-container input {
        flex-grow: 1;
        background-color: transparent;
        border: 2px solid #a89984;
        color: #a89984;
        font-family: Courier;
        font-size: 16px;
    }
</style>

<div class="input-container">
    <span>{label}</span>
    {#if type === "number"}
        <input bind:value type="number" />
    {:else if type === "checkbox"}
        <input bind:checked={value} type="checkbox" />
    {/if}
</div>
