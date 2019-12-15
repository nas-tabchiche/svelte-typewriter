export default async (node, { loop = false, cascade = false, interval = 30 } = {}) => {
	if (cascade && loop) throw new Error('`cascade` mode should not be used with `loop`!')
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const rng = (min, max) => Math.floor(Math.random() * (max - min) + min)
	const typingInterval = async () =>
		Array.isArray(interval) ? await sleep(interval[rng(0, interval.length)]) : await sleep(interval)

	const typewriterEffect = async (el, { loopAnimation } = { loopAnimation: false }) => {
		const elText = el.textContent.split('')
		el.textContent = ''
		for (const letter of elText) {
			el.textContent += letter
			if (loopAnimation && el.textContent === elText.join('')) {
				typeof loop === 'number' ? await sleep(loop) : await sleep(1500)
				while (el.textContent !== '') {
					el.textContent = el.textContent.slice(0, -1)
					await typingInterval()
				}
				return
			}
			await typingInterval()
		}
	}

	const elements = [...node.children]
		.map(el => (loop ? el.textContent.split('') : { el, text: el.textContent.split('') } ))

	switch (true) {
		case cascade:
			elements.forEach(({ el }) => (el.textContent = ''))
			for (const { el, text } of elements) {
				el.textContent = text.join('')
				await typewriterEffect(el)
			}
			break
		case loop:
			const loopParagraphTag = node.firstChild.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			node.childNodes.forEach(el => el.remove())
			node.appendChild(loopParagraph)
			while (true) {
				for (const text of elements) {
					loopParagraph.textContent = text.join('')
					await typewriterEffect(loopParagraph, { loopAnimation: true })
				}
			}
		default:
			const hasSingleTextNode = el => el.childNodes.length === 1 && el.childNodes[0].nodeType === 3
			hasSingleTextNode(node) ? typewriterEffect(node) : elements.forEach(({ el }) => typewriterEffect(el))
	}
}
