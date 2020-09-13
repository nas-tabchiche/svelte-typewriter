export const typewriter = async (node, options) => {
	const { default: mode } = options.loop ? await import('./loop') : await import('./non-loop')
	mode(node, options)
}
