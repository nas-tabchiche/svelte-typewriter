<script>
	import { onMount } from 'svelte'
	export let interval = 30
	export let cascade = false
	export let loop = 1500 // Pause interval between loops (in milliseconds)
	let typewriter

	// Stop execution for a specified amount of milliseconds
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

	// Verify if the given element has only a single textNode
	const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3

	onMount(async () => {
		const elements = [...typewriter.getElementsByTagName('*')].filter(el => hasSingleTextNode(el))
		const elementsText = [...elements.map(el => el.textContent.split(''))]

		// Avoid FOUC (flash-of-unstyled-content)
		typewriter.style.display = 'block'
		elements.forEach(el => el.textContent = '')

		// Apply the typewriter effect on a given element
		const typewriterEffect = async (el, elIndex, reverse = false) => {
			for (const letter of elementsText[elIndex]) {
				// End animation if text is fully written (forwards)
				if (!reverse && el.textContent === elementsText[elIndex].join('')) return
				// End animation if text is fully erased (backwards)
				if (reverse && el.textContent === '') return
				// Check if the interval is an array and use random intervals between each word
				if (Array.isArray(interval)) {
					const randomInterval = Math.floor(Math.random() * interval.length)
					await sleep(interval[randomInterval])
				} else if (typeof interval == 'number') {
					await sleep(interval)
				}
				!reverse ? el.textContent += letter : el.textContent = el.textContent.slice(0, -1)
			}
		}

		if (cascade) {
			// Applies the typewriter effect sequentially
			for (const [elIndex, el] of elements.entries()) await typewriterEffect(el, elIndex)
		} else if (loop) {
			const loopParagraphTag = elements[0].tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			elements.forEach(el => el.remove())
			typewriter.appendChild(loopParagraph)
			while (true) {
				for (const [phraseIndex] of elementsText.entries()) {
					await typewriterEffect(loopParagraph, phraseIndex)
					typeof loop == 'number' ? await sleep(loop) : await sleep(1500)
					await typewriterEffect(loopParagraph, phraseIndex, true)
				}
			}
		} else if (!cascade) {
			// Applies the typewriter effect simultaneously
			elements.forEach((el, elIndex) => typewriterEffect(el, elIndex))
		}
	})
</script>

<div bind:this={typewriter} style='display: none'>
	<slot />
</div>
