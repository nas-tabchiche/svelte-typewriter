<script>
	import { onMount } from 'svelte'
	export let interval = 30
	export let cascade = false
	export let loop = false
	let typewriter

	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const rng = (min, max) => Math.floor(Math.random() * max - min) + min
	const typingInterval = async () =>
		Array.isArray(interval) ? await sleep(interval[rng(0, interval.length)]) : await sleep(interval)

	const typewriterMode =
		cascade && !loop ? 'cascade' :
		loop && !cascade ? 'loop' :
		!cascade && !loop ? 'default' : (() => { throw new Error('`cascade` mode should not be used with `loop`!') })()

	onMount(async () => {
		const elements =
			typewriterMode === 'cascade' || typewriterMode === 'default'
				? [...typewriter.getElementsByTagName('*')].map(el => ({ el, text: el.textContent.split('') }))
				: [...typewriter.children].map(el => el.textContent.split(''))

		const typewriterEffect = async (el, { loopAnimation } = { loopAnimation: false }) => {
			const elText = el.textContent.split('')
			el.textContent = ''
			for (const letter of elText) {
				el.textContent += letter
				// Erase text if it's fully written
				if (loopAnimation && el.textContent === elText.join('')) {
					typeof loop == 'number' ? await sleep(loop) : await sleep(1500)
					while (el.textContent !== '') {
						el.textContent = el.textContent.slice(0, -1)
						await typingInterval()
					}
					return
				}
				await typingInterval()
			}
		}

		switch (typewriterMode) {
			case 'cascade':
				elements.forEach(({ el }) => el.textContent = '')
				for (const { el, text } of elements) {
					el.textContent = text.join('')
					await typewriterEffect(el)
				}
				break
			case 'loop':
				const loopParagraphTag = typewriter.firstChild.tagName.toLowerCase()
				const loopParagraph = document.createElement(loopParagraphTag)
				typewriter.querySelectorAll('*').forEach(el => el.remove())
				typewriter.appendChild(loopParagraph)
				while (true) {
					for (const text of elements) {
						loopParagraph.textContent = text.join('')
						await typewriterEffect(loopParagraph, { loopAnimation: true })
					}
				}
			case 'default':
				for (const { el, text } of elements) {
					el.textContent = text.join('')
					typewriterEffect(el)
				}
		}
	})
</script>

<div bind:this={typewriter}>
	<slot />
</div>
