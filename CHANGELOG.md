# Changelog

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Bug Fixes

- Reinitialize component when props are changed

### Documentation

- Update `Unexpected token` FAQ description and solution
- Add link to issue 73 on `Unexpected token` FAQ

### Build

- **deps:** Bump minimist from 1.2.5 to 1.2.6 in /example (#75)

### Refactor

- Replace example project with Vitebook

## 3.0.0-alpha.11 - 2022-02-11

### Bug Fixes

- Set typewriter component as commonjs entrypoint #73

### Documentation

- Add jest `Unexpected token` issue to FAQ section

## 3.0.0-alpha.10 - 2022-02-01

### Refactor

- Use style directive to pass cursor color to css

## 3.0.0-alpha.9 - 2022-01-28

### Bug Fixes

- Render children elements when js is disabled

### Miscellaneous Tasks

- Update dependencies

### Build

- **deps:** Bump nanoid from 3.1.30 to 3.2.0 in /example

## 3.0.0-alpha.8 - 2022-01-26

### Miscellaneous Tasks

- Include types on npm releases
- Add component typings

## 3.0.0-alpha.7 - 2022-01-19

### Bug Fixes

- Ensure scrambled text always ends like the expected text

## 3.0.0-alpha.6 - 2022-01-12

### Bug Fixes

- Prevent static elements from being hidden during delay

### Documentation

- Include FAQs on summary
- Highlight prop types
- Add section for projects using `svelte-typewriter`
- Properly align dependent projects logos
- Open dependent projects links on a new tab
- Include "Child attributes" section on summary

### Features

- Add `unwriteInterval` prop for loop modes

### Miscellaneous Tasks

- **example:** Add usage examples for `unwriteInterval` prop

## 3.0.0-alpha.5 - 2021-11-11

### Bug Fixes

- **getElements:** Pass `parentElement` parameter when calling itself recursively

## 3.0.0-alpha.4 - 2021-11-11

### Bug Fixes

- Properly animate elements containing a single text node

### Miscellaneous Tasks

- **example:** Update dependencies
- **example:** Replace `svelte-routing` with `tinro`
- **example:** Lock `svelte` version on 3.38.0
- **changelog:** Add note regarding semantic versioning on header
- **changelog:** Show commits scope
- **changelog:** Remove square brackets around versions

## 3.0.0-alpha.2 - 2021-11-06

### Documentation

- **props:** Document the `data-static` attribute

### Features

- Allow specifying static elements inside typewriter component (#41, #49)

### Miscellaneous Tasks

- **vertag:** Bump `svelte-typewriter` version on example lockfile before release

### Refactor

- Remove unnecessary `cleanChildNodes` helper

## 3.0.0-alpha.1 - 2021-11-05

### Bug Fixes

- Set svelte 3.28.x as `peerDependency` #60

### Documentation

- Create FAQs section

### Miscellaneous Tasks

- Update package version on lockfile

## 3.0.0-alpha.0 - 2021-11-05

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

- **example:** Remove old build script
- **example:** Remove unnecessary dependency
- **example:** Remove svelte-preprocessor-esbuild (lukeed/svelte-preprocessor-esbuild#4)
- Remove redundant script `example:start` from package.json
- **example:** Remove esbuild (#38)
- **example:** Set `start` script to `vite preview` (#38)
- Include example build output on .gitignore
- **example:** Adjust favicon path
- Remove `example:` prefix from scripts
- Remove unnecessary package `rimraf`
- **example:** Rewrite example files in js with JSDoc typings
- **example:** Change favicon path
- **example:** Remove unnecessary package.json fields
- Replace `yarn` with `npm`
- Install example project dependencies on `postinstall`
- **example:** Import `svelte-typewriter` through local dependency instead alias
- Set vite svelte plugin as devDependency instead dependency
- Replace `auto-changelog` with `git-cliff`
- Update `package.json` scripts to use `--prefix` instead of `cd`
- Remove `cross-env` from `devDependencies`
- Update `husky` to `7.0.4`
- Remove `post-push` git hook
- Amend changelog to include current commit
- Update dependencies
- **changelog:** Create a separate section for breaking changes
- **vertag:** Update changelog file name to be staged
- **changelog:** Include missing version header on release entries
- **vertag:** Simplify release process with `npm version`
- **vertag:** Tag release commit after changelog
- Add descriptive comment to each git hook
- **vertag:** Allow specifying custom version

### Refactor

- **helpers:** Avoid circular dependencies (#35)
- Remove unused parent element references (#35)
- Remove unneeded types (#35)
- Convert example project to typescript (#35)
- **example:** Add alias for svelte-typewriter src
- Convert example components to typescript (#35)
- Rewrite lib files in js with JSDoc typings
- Replace import aliases with relative paths
- **getElements:** Get all child elements instead just top-level ones
- Adapt modes to properly animate nested elements

### Build

- Migrate from rollup to esbuild (#35)
- Remove rollup
- **example:** Setup vite (#38)
- **example:** Add html minification vite plugin (#38)
- Setup vite (#38)
- Remove esbuild (#38)
- **deps:** Bump handlebars from 4.7.6 to 4.7.7
- **deps:** Bump postcss from 8.2.8 to 8.2.15 in /example
- **deps:** Bump postcss from 8.2.8 to 8.2.15
- **deps:** Bump glob-parent from 5.1.1 to 5.1.2 in /example
- **deps:** Bump path-parse from 1.0.6 to 1.0.7 in /example
- **deps:** Bump path-parse from 1.0.6 to 1.0.7
- **example:** Remove duplicated `build` field from vite config
- Update vite svelte plugin package name

## 2.4.5 - 2020-12-24

### Miscellaneous Tasks

- Remove unnecessary "any" types
- Remove duplicated "isInRange" helper types
- Bump dependencies
- **cascade:** Remove unnecessary cursor hiding function
- **modes:** Switch from default to named exports
- **example:** Add a component for each animation mode
- Bump dependencies
- **example:** Add import alias
- **example:** Replace cursor radio button by color picker

### Refactor

- Convert "utils" into separated "helpers" (#33)
- Convert helpers and modes to typescript (#33)
- Add proper types for helpers and modes (#33)
- **helpers:** Add writeEffect
- Modularize cursor hiding module (#33)
- **utils:** Integrate loop logic into "writeEffect" (#33)
- Unify loop and loopRandom modes
- **default:** Modularize "getLongestTextElement"
- **getLongestTextElement:** Return Element rather TypewriterElement
- Unify both cascade and default modes (#33)
- Modularize getRandomElement from loop mode (#33)
- Reinitialize component on state update

### Build

- Replace tsc with rollup for building typescript

## 2.4.4 - 2020-12-15

### Bug Fixes

- **utils:** Properly filter innerHTML tags, closes #32
- **utils:** Escape ampersand unicode entity, closes #31

### Miscellaneous Tasks

- Bump dependencies
- **example:** Output css to ./public/build

## 2.4.3 - 2020-12-11

### Bug Fixes

- **loop:** Preserve element attributes (#29)
- **loopRandom:** Preserve element attributes, closes #29
- **cascade:** Re-add cursor, closes #30

### Documentation

- Add contribution steps

### Miscellaneous Tasks

- Set changelog template to "keepachangelog"

## 2.4.2 - 2020-12-11

### Bug Fixes

- **cascade:** Properly animate nested elements (#25)
- **scramble:** Adjust to work with "getElements" changes (#25)

### Miscellaneous Tasks

- Bump dependencies

## 2.4.1 - 2020-11-12

### Bug Fixes

- **loopRandom:** Properly animate single text nodes

## 2.4.0 - 2020-11-12

### Documentation

- Add "loopMode" details #23
- Improve description of "loop" and "loopRandom"
- Write jsdoc annotations for "cleanChildNodes"

### Refactor

- **loop,loopRandom:** Dedupe "typewriterEffect"
- **loop,loopRandom:** Dedupe "cleanChilNodes"

## 2.3.2 - 2020-11-12

### Features

- Add "loopRandom" mode #23

### Miscellaneous Tasks

- Bump rollup from 2.32.1 to 2.33.0
- Automate pushing of git tags to remote
- Remove "git push" from "post-commit" hook
- Bump dependencies

### Refactor

- Rewrite changelog generation scripts

## 2.3.1 - 2020-10-30

### Documentation

- Add missing import on example

### Miscellaneous Tasks

- Bump dependencies

## 2.3.0 - 2020-10-20

### Bug Fixes

- **scramble:** Solve animation issue with multiple elements
- Properly animate single text elements on scramble mode
- **scramble:** Properly emit "done" event

### Documentation

- Add npm stats badges
- Add notice about dynamic imports issue on rollup #21
- Move jsdoc annotations into a single file
- Add `scramble` mode details

### Features

- Add proof-of-concept version of scramble mode

### Refactor

- Split scramble mode into smaller functions
- **scramble:** Simplify helper functions

## 2.2.0 - 2020-10-07

### Bug Fixes

- Solve regression in package.json `files` field #18

### Documentation

- Add jsdoc annotations to animation modes
- Add `delay` prop details

### Features

- Implement `delay` prop

### Miscellaneous Tasks

- Remove changelog "Unreleased" section on `publish` script

## 2.1.17 - 2020-10-06

### Bug Fixes

- **utils:** Solve single text node elements regression

### Documentation

- Annotate `utils` and `typewriter-effect` with jsdoc #15

### Miscellaneous Tasks

- **deps:** Bump node-fetch from 2.6.0 to 2.6.1
- Add favicon
- Add build script to pre-commit hook
- **deps:** Bump node-fetch from 2.6.0 to 2.6.1

### Refactor

- Implement new architecture PoC #15
- Modularize modes and actions #15
- Simplify `getElements` function
- Replace mode components with actions #15
- Move cursor styles to Typewriter.svelte
- **loop:** Remove unnecessary code
- Split non-loop into default and cascade modes

### Build

- Add build script to example app
- Generate ESM and UMD compatible bundles
- Disable hash on bundle filenames
- Set `summaryOnly` to true on rollup-plugin-analyzer

## 2.1.16 - 2020-09-06

### Documentation

- **readme:** Update "Modes" and "Event listeners" sections

### Miscellaneous Tasks

- **changelog:** Refactor changelog generation script
- Bump dependencies

## 2.1.15 - 2020-09-06

### Bug Fixes

- Change loop mode behavior to use all child tags

## 2.1.14 - 2020-09-06

### Bug Fixes

- Solve imprecise trigger of `on:done` event on default mode

### Documentation

- **README:** Refactor documentation

## 2.1.13 - 2020-09-03

### Bug Fixes

- Solve problem with on:done listener on loop mode

## 2.1.12 - 2020-07-18

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

## 2.1.11 - 2020-07-16

### Miscellaneous Tasks

- Bump "auto-changelog" from 1.16.2 to 2.2.0
- Add "build" directory to .gitignore
- Add prettier linting script
- Add typings to rollup config

## 2.1.9 - 2020-03-10

### Bug Fixes

- Solve animation issue on nested DOM elements

### Miscellaneous Tasks

- Add `example` directory for testing purposes

## 2.1.8 - 2020-02-25

### Miscellaneous Tasks

- Change svelte version from latest to 3.x

### Lint

- Remove .prettierignore

## 2.1.4 - 2020-02-10

### Miscellaneous Tasks

- Bump svelte from 3.17.2 to 3.18.2

## 2.1.1 - 2020-01-23

### Documentation

- **README:** Add `on:done` section, closes #8

## 2.1.0 - 2020-01-23

### Features

- Implement animation callback event #8

## 2.0.3 - 2020-01-20

### Documentation

- **README:** Add "Made with Svelte" badge

## 2.0.2 - 2020-01-12

### Documentation

- **README:** Update directives deprecation notice
- **README:** Add demo repl for `cursor` option
- **README:** Remove directives deprecation notice
- **README:** Add repl link for `loop` option

## 2.0.0 - 2019-12-23

### Documentation

- **README:** Document `cursor` option #7

## 1.5.5 - 2019-12-15

### Refactor

- Simplify verification of animation props

## 1.5.4 - 2019-12-14

### Bug Fixes

- Resolve `use` directive not working on single text node elements

## 1.5.3 - 2019-12-12

### Dependencies

- Bump `svelte` from "^3.15.0" to "^3.16.4"

## 1.5.2 - 2019-12-11

### Documentation

- **README:** Document the "directive-based" animation approach

## 1.5.1 - 2019-12-11

### Bug Fixes

- Remove unused properties from default parameters object

## 1.5.0 - 2019-12-11

### Features

- Create `use:typewriter` directive, closes #6

## 1.4.2 - 2019-12-11

### Refactor

- Rewrite typewriter function for svelte `use` directive

## 1.4.1 - 2019-11-21

### Bug Fixes

- **loop:** Change the default value of `loop` to false

## 1.4.0 - 2019-11-21

### Documentation

- **README:** Add custom timing array to `interval` section, closes #4

### Features

- Enable custom timing on `interval` #4

## 1.3.4 - 2019-11-21

### Bug Fixes

- **fouc:** Prevent flash of unstyled content

## 1.3.0 - 2019-11-20

### Features

- **loop:** Add `loop` option, closes #3

### Miscellaneous Tasks

- Change CHANGELOG generation commit message
- Add auto-changelog `version` script

## 1.2.1 - 2019-11-15

### Documentation

- **README:** Update svelte version on demo link
- **README:** Add separated demos for each option

### Features

- Add `interval` and `cascade` options

## 1.1.1 - 2019-11-12

### Miscellaneous Tasks

- **README:** Add PR's welcome badge

## 1.1.0 - 2019-11-12

### Miscellaneous Tasks

- Update the main field

