<script>
    let { label, value = $bindable(), children } = $props();
</script>

<div class="select-container">
    <span>{label}</span>
    <select bind:value>
        {@render children?.()}
    </select>
</div>
