import { typingInterval, hideCursorOnAnimationEnd } from '@svelte-typewriter/helpers'
import type { TypewriterEffectFn } from '@svelte-typewriter/types'

const writeEffect: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
		const isLoopModeEnabled = options.loop || options.loopRandom
		const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
		if (isLoopModeEnabled && fullyWritten) {
			const { unwriteEffect } = await import('./unwriteEffect')
			await unwriteEffect(currentNode, options)
		}
		await typingInterval(options.interval)
	}
	hideCursorOnAnimationEnd(currentNode)
}

export { writeEffect }
