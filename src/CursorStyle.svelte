<style>
	@keyframes -global-cursorFade {
		0% {
			opacity: 1;
		}

		50% {
			opacity: 0;
		}

		100% {
			opacity: 1;
		}
	}

	:global(.cursor .typing::after) {
		content: '▌';
		display: inline-block;
		color: var(--cursor-color);
		animation: cursorFade 1.25s infinite;
	}
</style>
