<script>
	import { onMount } from 'svelte'
	export let interval = 30
	export let cascade
	let typewriter
	onMount(async () => {
		const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
		// Verify if the given element has only a single textNode
		const isTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
		// Get only elements containing a single textNode
		let elements = [...typewriter.getElementsByTagName('*')].filter(el => isTextNode(el))
		// Store the splitted textContent of each element in array
		const elementsText = [...elements.map(el => el.textContent.split(''))]
		// Remove text from all elements
		elements.forEach(el => el.textContent = '')
		// Apply the typewriter effect
		const typewriterEffect = async (el, elIndex) => {
			for (const letter of elementsText[elIndex]) {
				if (el.textContent === elementsText[elIndex].join('')) return
				await sleep(interval)
				el.textContent += letter
			}
		}
		if (cascade) {
			// Applies the typewriter effect sequentially
			for (const [elIndex, el] of elements.entries()) await typewriterEffect(el, elIndex)
		} else {
			// Applies the typewriter effect simultaneously
			elements.forEach((el, elIndex) => typewriterEffect(el, elIndex))
		}
	})
</script>

<div bind:this={typewriter}>
	<slot />
</div>
