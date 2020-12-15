import { typingInterval } from './typingInterval'
import { sleep } from './sleep'
import { unwriteEffect } from './unwriteEffect'

/** @type {TypewriterEffectFn} */
export const loopTypewriterEffect = async ({ currentNode, text }: any, options: any) => {
	currentNode.textContent = ''
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const letter = text[index]
		letter === '<' && (index = text.indexOf('>', index) + 1)
		currentNode.innerHTML = text.slice(0, index)
		const textWithUnescapedAmpersands = text.replaceAll('&', '&amp;')
		const fullyWritten = currentNode.innerHTML === textWithUnescapedAmpersands
		if (fullyWritten) {
			options.dispatch('done')
			await sleep(typeof options.loop === 'number' ? options.loop : 1500)
			await unwriteEffect(currentNode, options)
		}
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}
