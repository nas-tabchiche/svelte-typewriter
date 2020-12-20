type OnAnimationEnd = (element: Element, callback: Function) => void

const onAnimationEnd: OnAnimationEnd = (element, callback) => {
	const observer = new MutationObserver(mutations => {
		mutations.forEach(mutation => {
			const elementAttributeChanged = mutation.type === 'attributes'
			const elementFinishedTyping = !(mutation.target as Element).classList.contains('typing')
			if (elementAttributeChanged && elementFinishedTyping) callback()
		})
	})

	observer.observe(element, {
		attributes: true,
		childList: true,
		subtree: true
	})
}

export { onAnimationEnd }
