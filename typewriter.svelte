<script>
	// Only works for text content inside tags
	import { onMount } from 'svelte'
	onMount(async () => {
		const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
		// Store all elements splitted text in array
		const isTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
		let [...elements] = document.querySelectorAll('.typewriter-effect *')
		// Get only elements with textNodes
		elements = elements.filter(el => isTextNode(el))
		// Save all element texts on array
		const elementsText = [ ...elements.map(el => el.textContent.split('')) ]
		// Remove text from all elements
		elements.forEach(el => el.textContent = '')
		// Applies the typewriter effect, sequentially, on each element
		for (const [elIndex, element] of elements.entries()) {
			for (const letter of elementsText[elIndex]) {
				if (element.textContent === elementsText[elIndex].join('')) return
				await sleep(30)
				element.textContent += letter
			}
		}
	})
</script>

<div class='typewriter-effect'>
	<slot />
</div>
