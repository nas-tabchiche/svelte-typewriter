<script>
	import { onMount, onDestroy, getContext } from 'svelte'
	import { getElements } from './get-elements'
	import { typewriterEffect } from './typewriter'
	import Style from './Style.svelte'

	let node
	let elements = []

	const options = getContext('options')

	const loopMode = async () => {
		const loopParagraphTag = node.firstChild.tagName.toLowerCase()
		const loopParagraph = document.createElement(loopParagraphTag)
		node.childNodes.forEach(el => el.remove())
		node.appendChild(loopParagraph)
		while (options.loop) {
			for (const { currentNode, text } of elements) {
				node.childNodes.forEach(el => el.remove())
				const loopParagraphTag = currentNode.tagName.toLowerCase()
				const loopParagraph = document.createElement(loopParagraphTag)
				loopParagraph.textContent = text.join('')
				node.appendChild(loopParagraph)
				await typewriterEffect({ currentNode: loopParagraph, text }, options)
				node.childNodes.forEach(el => el.remove())
			}
		}
	}

	onMount(() => {
		elements = getElements(node)
		loopMode()
	})

	onDestroy(() => (loop = false))
</script>

<Style />

<div
	style="--cursor-color: {typeof options.cursor === 'string' ? options.cursor : 'black'}"
	class:cursor={options.cursor}
	bind:this={node}
>
	<slot />
</div>
