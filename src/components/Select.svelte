<script>
    export let label
    export let value
</script>

<div class="select-container">
    <span>{label}</span>
    <select bind:value>
        <slot />
    </select>
</div>
