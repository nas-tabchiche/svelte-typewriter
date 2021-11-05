# Changelog

All notable changes to this project will be documented in this file.

## [unreleased]

### Breaking changes

- Remove scramble mode
- Drop support for ESM and UMD bundles
- Re-add scramble and solve previous implementation issues (#35, #37)

### Documentation

- Add "change preview" step on contribution guide
- Include missing import on "Usage" section
- Remove unnecessary section from summary
- Re-add scramble mode props to their respective sections

### Miscellaneous Tasks

- Remove old build script
- Remove unnecessary dependency
- Remove svelte-preprocessor-esbuild (lukeed/svelte-preprocessor-esbuild#4)
- Remove redundant script `example:start` from package.json
- Remove esbuild (#38)
- Set `start` script to `vite preview` (#38)
- Include example build output on .gitignore
- Adjust favicon path
- Remove `example:` prefix from scripts
- Remove unnecessary package `rimraf`
- Rewrite example files in js with JSDoc typings
- Change favicon path
- Remove unnecessary package.json fields
- Replace `yarn` with `npm`
- Install example project dependencies on `postinstall`
- Import `svelte-typewriter` through local dependency instead alias
- Set vite svelte plugin as devDependency instead dependency
- Replace `auto-changelog` with `git-cliff`
- Update `package.json` scripts to use `--prefix` instead of `cd`
- Remove `cross-env` from `devDependencies`
- Update `husky` to `7.0.4`
- Remove `post-push` git hook
- Amend changelog to include current commit
- Update dependencies
- Create a separate section for breaking changes
- Update changelog file name to be staged
- Include missing version header on release entries
- Simplify release process with `npm version`
- Tag release commit after changelog
- Add descriptive comment to each git hook

### Refactor

- Avoid circular dependencies (#35)
- Remove unused parent element references (#35)
- Remove unneeded types (#35)
- Convert example project to typescript (#35)
- Add alias for svelte-typewriter src
- Convert example components to typescript (#35)
- Rewrite lib files in js with JSDoc typings
- Replace import aliases with relative paths
- Get all child elements instead just top-level ones
- Adapt modes to properly animate nested elements

### Build

- Migrate from rollup to esbuild (#35)
- Remove rollup
- Setup vite (#38)
- Add html minification vite plugin (#38)
- Setup vite (#38)
- Remove esbuild (#38)
- Bump handlebars from 4.7.6 to 4.7.7
- Bump postcss from 8.2.8 to 8.2.15 in /example
- Bump postcss from 8.2.8 to 8.2.15
- Bump glob-parent from 5.1.1 to 5.1.2 in /example
- Bump path-parse from 1.0.6 to 1.0.7 in /example
- Bump path-parse from 1.0.6 to 1.0.7
- Remove duplicated `build` field from vite config
- Update vite svelte plugin package name

## [2.4.5] - 2020-12-24

### Miscellaneous Tasks

- Remove unnecessary "any" types
- Remove duplicated "isInRange" helper types
- Bump dependencies
- Remove unnecessary cursor hiding function
- Switch from default to named exports
- Add a component for each animation mode
- Bump dependencies
- Add import alias
- Replace cursor radio button by color picker

### Refactor

- Convert "utils" into separated "helpers" (#33)
- Convert helpers and modes to typescript (#33)
- Add proper types for helpers and modes (#33)
- Add writeEffect
- Modularize cursor hiding module (#33)
- Integrate loop logic into "writeEffect" (#33)
- Unify loop and loopRandom modes
- Modularize "getLongestTextElement"
- Return Element rather TypewriterElement
- Unify both cascade and default modes (#33)
- Modularize getRandomElement from loop mode (#33)
- Reinitialize component on state update

### Build

- Replace tsc with rollup for building typescript

## [2.4.4] - 2020-12-15

### Bug Fixes

- Properly filter innerHTML tags, closes #32
- Escape ampersand unicode entity, closes #31

### Miscellaneous Tasks

- Bump dependencies
- Output css to ./public/build

## [2.4.3] - 2020-12-11

### Bug Fixes

- Preserve element attributes (#29)
- Preserve element attributes, closes #29
- Re-add cursor, closes #30

### Documentation

- Add contribution steps

### Miscellaneous Tasks

- Set changelog template to "keepachangelog"

## [2.4.2] - 2020-12-11

### Bug Fixes

- Properly animate nested elements (#25)
- Adjust to work with "getElements" changes (#25)

### Miscellaneous Tasks

- Bump dependencies

## [2.4.1] - 2020-11-12

### Bug Fixes

- Properly animate single text nodes

## [2.4.0] - 2020-11-12

### Documentation

- Add "loopMode" details #23
- Improve description of "loop" and "loopRandom"
- Write jsdoc annotations for "cleanChildNodes"

### Refactor

- Dedupe "typewriterEffect"
- Dedupe "cleanChilNodes"

## [2.3.2] - 2020-11-12

### Features

- Add "loopRandom" mode #23

### Miscellaneous Tasks

- Bump rollup from 2.32.1 to 2.33.0
- Automate pushing of git tags to remote
- Remove "git push" from "post-commit" hook
- Bump dependencies

### Refactor

- Rewrite changelog generation scripts

## [2.3.1] - 2020-10-30

### Documentation

- Add missing import on example

### Miscellaneous Tasks

- Bump dependencies

## [2.3.0] - 2020-10-20

### Bug Fixes

- Solve animation issue with multiple elements
- Properly animate single text elements on scramble mode
- Properly emit "done" event

### Documentation

- Add npm stats badges
- Add notice about dynamic imports issue on rollup #21
- Move jsdoc annotations into a single file
- Add `scramble` mode details

### Features

- Add proof-of-concept version of scramble mode

### Refactor

- Split scramble mode into smaller functions
- Simplify helper functions

## [2.2.0] - 2020-10-07

### Bug Fixes

- Solve regression in package.json `files` field #18

### Documentation

- Add jsdoc annotations to animation modes
- Add `delay` prop details

### Features

- Implement `delay` prop

### Miscellaneous Tasks

- Remove changelog "Unreleased" section on `publish` script

## [2.1.17] - 2020-10-06

### Bug Fixes

- Solve single text node elements regression

### Documentation

- Annotate `utils` and `typewriter-effect` with jsdoc #15

### Miscellaneous Tasks

- Bump node-fetch from 2.6.0 to 2.6.1
- Add favicon
- Add build script to pre-commit hook
- Bump node-fetch from 2.6.0 to 2.6.1

### Refactor

- Implement new architecture PoC #15
- Modularize modes and actions #15
- Simplify `getElements` function
- Replace mode components with actions #15
- Move cursor styles to Typewriter.svelte
- Remove unnecessary code
- Split non-loop into default and cascade modes

### Build

- Add build script to example app
- Generate ESM and UMD compatible bundles
- Disable hash on bundle filenames
- Set `summaryOnly` to true on rollup-plugin-analyzer

## [2.1.16] - 2020-09-06

### Documentation

- Update "Modes" and "Event listeners" sections

### Miscellaneous Tasks

- Refactor changelog generation script
- Bump dependencies

## [2.1.15] - 2020-09-06

### Bug Fixes

- Change loop mode behavior to use all child tags

## [2.1.14] - 2020-09-06

### Bug Fixes

- Solve imprecise trigger of `on:done` event on default mode

### Documentation

- Refactor documentation

## [2.1.13] - 2020-09-03

### Bug Fixes

- Solve problem with on:done listener on loop mode

## [2.1.12] - 2020-07-18

### Miscellaneous Tasks

- Modify options related to changelog generation
- Include "Unreleased" commits on changelog
- Add husky pre-push hook for changelog generation
- Update CHANGELOG.md
- Add prettier script to husky hooks

### Refactor

- Simplify conditional expressions

### Lint

- Change printWidth from 120 to 80

## [2.1.11] - 2020-07-16

### Miscellaneous Tasks

- Bump "auto-changelog" from 1.16.2 to 2.2.0
- Add "build" directory to .gitignore
- Add prettier linting script
- Add typings to rollup config

## [2.1.9] - 2020-03-10

### Bug Fixes

- Solve animation issue on nested DOM elements

### Miscellaneous Tasks

- Add `example` directory for testing purposes

## [2.1.8] - 2020-02-25

### Miscellaneous Tasks

- Change svelte version from latest to 3.x

### Lint

- Remove .prettierignore

## [2.1.4] - 2020-02-10

### Miscellaneous Tasks

- Bump svelte from 3.17.2 to 3.18.2

## [2.1.1] - 2020-01-23

### Documentation

- Add `on:done` section, closes #8

## [2.1.0] - 2020-01-23

### Features

- Implement animation callback event #8

## [2.0.3] - 2020-01-20

### Documentation

- Add "Made with Svelte" badge

## [2.0.2] - 2020-01-12

### Documentation

- Update directives deprecation notice
- Add demo repl for `cursor` option
- Remove directives deprecation notice
- Add repl link for `loop` option

## [2.0.0] - 2019-12-23

### Documentation

- Document `cursor` option #7

## [1.5.5] - 2019-12-15

### Refactor

- Simplify verification of animation props

## [1.5.4] - 2019-12-14

### Bug Fixes

- Resolve `use` directive not working on single text node elements

## [1.5.3] - 2019-12-12

### Dependencies

- Bump `svelte` from "^3.15.0" to "^3.16.4"

## [1.5.2] - 2019-12-11

### Documentation

- Document the "directive-based" animation approach

## [1.5.1] - 2019-12-11

### Bug Fixes

- Remove unused properties from default parameters object

## [1.5.0] - 2019-12-11

### Features

- Create `use:typewriter` directive, closes #6

## [1.4.2] - 2019-12-11

### Refactor

- Rewrite typewriter function for svelte `use` directive

## [1.4.1] - 2019-11-21

### Bug Fixes

- Change the default value of `loop` to false

## [1.4.0] - 2019-11-21

### Documentation

- Add custom timing array to `interval` section, closes #4

### Features

- Enable custom timing on `interval` #4

## [1.3.4] - 2019-11-21

### Bug Fixes

- Prevent flash of unstyled content

## [1.3.0] - 2019-11-20

### Features

- Add `loop` option, closes #3

### Miscellaneous Tasks

- Change CHANGELOG generation commit message
- Add auto-changelog `version` script

## [1.2.1] - 2019-11-15

### Documentation

- Update svelte version on demo link
- Add separated demos for each option

### Features

- Add `interval` and `cascade` options

## [1.1.1] - 2019-11-12

### Miscellaneous Tasks

- Add PR's welcome badge

## [1.1.0] - 2019-11-12

### Miscellaneous Tasks

- Update the main field

