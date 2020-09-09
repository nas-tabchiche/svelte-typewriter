<script>
	import { onMount, getContext } from 'svelte'
	import { getElements } from './get-elements'
	import { typewriterEffect } from './typewriter'
	import Style from './Style.svelte'

	let node
	let elements = []

	const options = getContext('options')

	const nonLoopMode = async () => {
		options.cascade && elements.forEach(({ currentNode }) => (currentNode.textContent = ''))
		for (const element of elements) {
			options.cascade
				? await typewriterEffect(element, options)
				: typewriterEffect(element, options)
		}

		if (options.cascade) {
			options.dispatch('done')
		} else {
			const { currentNode: lastElementToFinish } = elements.reduce(
				(longestTextElement, element) => {
					const longestTextLength = longestTextElement.text.length
					return element.text.length > longestTextLength
						? (longestTextElement = element)
						: longestTextElement
				}
			)

			const observer = new MutationObserver(mutations => {
				mutations.forEach(mutation => {
					const lastElementFinishedTyping = !mutation.target.classList.contains('typing')
					if (mutation.type === 'attributes' && lastElementFinishedTyping) {
						options.dispatch('done')
					}
				})
			})

			observer.observe(lastElementToFinish, {
				attributes: true,
				childList: true,
				subtree: true
			})
		}
	}

	onMount(() => {
		elements = getElements(node)
		nonLoopMode()
	})
</script>

<Style />

<div
	style="--cursor-color: {typeof options.cursor === 'string' ? options.cursor : 'black'}"
	class:cursor={options.cursor}
	bind:this={node}
>
	<slot />
</div>
