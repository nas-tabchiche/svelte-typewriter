<style>
    .customization-panel {
        position: fixed;
        bottom: 0;
        display: flex;
        flex-direction: column;
        background-color: #a8998426;
        color: #a89984;
        padding: 18px;
        max-width: 768px;
        width: 100%;
        font-family: Courier;
        border-radius: 14px 14px 0 0;
        animation: slide-up 0.75s forwards;
        max-height: 250px;
        overflow-y: auto;
    }

    .customization-panel::-webkit-scrollbar {
        width: 15px;
    }

    .customization-panel::-webkit-scrollbar-track {
        margin: 4px 0;
    }

    .customization-panel::-webkit-scrollbar-thumb {
        background: #282828;
        border: 4px solid #a8998426;
        border-radius: 14px;
    }

    @keyframes slide-up {
        from {
            transform: translateY(100%);
            opacity: 0;
        }

        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
</style>

<div class="customization-panel">
    <slot />
</div>
