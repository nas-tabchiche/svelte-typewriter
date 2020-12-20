import {
	writeEffect,
	unwriteEffect,
	createElement,
	rng,
	cleanChildNodes
} from '@svelte-typewriter/helpers'
import type { GetRandomText, LoopAnimation, TypewriterModeFn } from '@svelte-typewriter/types'

let alreadyChoosenTexts: any[] = []

// Modularize this
const getRandomText: GetRandomText = elements => {
	while (true) {
		const randomIndex = rng(0, elements.length)
		// After each iteration, avoid repeating the last text from the last iteration
		const isTextDifferentFromPrevious =
			typeof alreadyChoosenTexts === 'number' && randomIndex !== alreadyChoosenTexts
		const isTextFirstTime =
			Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex)
		const shouldDisplayText = isTextFirstTime || isTextDifferentFromPrevious
		if (shouldDisplayText) {
			isTextDifferentFromPrevious && (alreadyChoosenTexts = [])
			alreadyChoosenTexts.push(randomIndex)
			const randomText = elements[randomIndex]
			return randomText
		}
		const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length
		restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop()!)
	}
}

const loopAnimation: LoopAnimation = async (parentElement, { currentNode, text }, options) => {
	cleanChildNodes(parentElement)
	const loopParagraphTag = currentNode.tagName.toLowerCase()
	const loopParagraph = createElement(text, loopParagraphTag)
	const loopParagraphAttributes = [...currentNode.attributes]
	loopParagraphAttributes.forEach(({ name, value }) => loopParagraph.setAttribute(name, value))
	parentElement.appendChild(loopParagraph)
	await writeEffect({ currentNode: loopParagraph, text }, options)
	const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
	const fullyWritten = loopParagraph.innerHTML === textWithUnescapedAmpersands
	fullyWritten && (await unwriteEffect(loopParagraph, options))
	cleanChildNodes(parentElement)
}

const mode: TypewriterModeFn = async ({ node, elements }, options) => {
	while (true) {
		if (options.loop) {
			for (const element of elements) await loopAnimation(node, element, options)
		} else if (options.loopRandom) {
			const element = getRandomText(elements)
			await loopAnimation(node, element, options)
		}
	}
}

export { mode }
