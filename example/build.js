import fs from 'fs/promises'
import path from 'path'
import slash from 'slash'
import { fileURLToPath } from 'url'
import esbuild from 'esbuild'
import sveltePlugin from 'esbuild-svelte'
import glob from 'tiny-glob'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const replaceInFile = async (filename, oldString, newString) => {
	let fileContent = await fs.readFile(filename, 'utf-8')
	fileContent = fileContent.replaceAll(oldString, newString)
	await fs.writeFile(filename, fileContent, 'utf-8')
}

// https://github.com/sveltejs/svelte/issues/3165
const svelteOutrosIssue = async () => {
	const slashedPath = slash('public/build/**/*')
	const files = await glob(slashedPath, { filesOnly: true, cwd: __dirname })
	files.forEach(file =>
		replaceInFile(
			file,
			'outros.c.push',
			'if (outros === undefined) { block.o(local); return }\noutros.c.push'
		)
	)
}

const build = async () => {
	await esbuild.build({
		entryPoints: ['./src/index.js'],
		platform: 'browser',
		bundle: true,
		format: 'esm',
		splitting: true,
		outbase: './src',
		outdir: './public/build',
		plugins: [sveltePlugin()]
	})
	await svelteOutrosIssue()
}

build()
