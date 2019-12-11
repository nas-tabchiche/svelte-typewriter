export default async (node, { loop = false, cascade = false, interval = 30 } = { loop, cascade, interval }) => {
	const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
	const typingInterval = async () =>
		Array.isArray(interval) ? await sleep(interval[rng(0, interval.length)]) : await sleep(interval)

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

	const typewriterMode =
		cascade && !loop
			? 'cascade'
			: loop && !cascade
			? 'loop'
			: !cascade && !loop
			? 'default'
			: (() => {
					throw new Error('`cascade` mode should not be used with `loop`!')
			  })()

	const elements =
		typewriterMode === 'cascade' || typewriterMode === 'default'
			? [...node.getElementsByTagName('*')].map(el => ({ el, text: el.textContent.split('') }))
			: [...node.children].map(el => el.textContent.split(''))

	switch (typewriterMode) {
		case 'cascade':
			elements.forEach(({ el }) => (el.textContent = ''))
			for (const { el, text } of elements) {
				el.textContent = text.join('')
				await typewriterEffect(el)
			}
			break
		case 'loop':
			const loopParagraphTag = node.firstChild.tagName.toLowerCase()
			const loopParagraph = document.createElement(loopParagraphTag)
			node.querySelectorAll('*').forEach(el => el.remove())
			node.appendChild(loopParagraph)
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
}
