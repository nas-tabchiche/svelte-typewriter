# Changelog

All notable changes to this project will be documented in this file.

## [3.2.3] - 2024-01-08

### Bug Fixes

- Add `Intl.Segmenter` polyfill to support Firefox

## [3.2.2] - 2023-11-13

### Bug Fixes

- Prevent multiple emojis in a row from being (un)typed all at once

## [3.2.1] - 2023-11-11

### Bug Fixes

- Write/unwrite emojis as a whole instead of byte-by-byte ([#11](https://github.com/henriquehbr/svelte-typewriter/issues/11))

## [3.2.0] - 2023-11-09

### Features

- Trigger "done" event on loop mode each time text gets fully erased

## [3.1.8] - 2023-10-28

### Bug Fixes

- Adjust package publish settings

## [3.1.7] - 2023-10-23

### Bug Fixes

- Use proper return types on svelte actions

### Miscellaneous Tasks

- Update dependencies

## [3.1.6] - 2023-04-23

### Bug Fixes

- Solve conflicts when resolving svelte source files

## [3.1.5] - 2023-04-17

### Bug Fixes

- Emit `done` event on concurrent mode with `keepCursorOnFinish`

### Documentation

- Add missing word on installation instructions hint

### Miscellaneous Tasks

- Use docker buildkit subcommand instead of environment variable
- Update `tagit` to version 0.7.0

## [3.1.4] - 2022-11-18

### Bug Fixes

- Include javascript files when publishing to npm

## [3.1.3] - 2022-11-06

### Bug Fixes

- Include definition files when publishing to npm

## [3.1.2] - 2022-11-02

### Bug Fixes

- Automaticaly generate package before publishing to npm

## [3.1.1] - 2022-11-02

### Bug Fixes

- Adjust entry point component path

## [3.1.0] - 2022-10-28

### Documentation

- Adjust summary items indentation level

### Features

- Allow setting cursor timeout after animation ends

## [3.0.4] - 2022-08-16

### Bug Fixes

- Include modes and helpers when publishing to npm

## [3.0.3] - 2022-08-16

### Bug Fixes

- Adjust path of entry point file

### Miscellaneous Tasks

- Replace deprecated config option

## [3.0.2] - 2022-08-06

### Documentation

- Update demo url
- Add pada to the projects showcase
- Remove sourcehut migration notice

### Miscellaneous Tasks

- Migrate project structure to SvelteKit
- Set base path on correct config property
- Update repository URLs on `package.json`
- Separate author name from email in `package.json`
- Update dependencies

## [3.0.1] - 2022-07-15

### Bug Fixes

- Export animation directives instead of their types

### Miscellaneous Tasks

- Remove unnecessary `accessors` option from component
- Migrate example project deployments to sourcehut pages

## [3.0.0-beta.1] - 2022-07-11

### Bug Fixes

- Include animation modes functions on type definitions

### Documentation

- Fix markdown table formatting on sourcehut
- Fix showcase projects logos breaking on sourcehut

### Miscellaneous Tasks

- Re-add getters and setters on example project

## [3.0.0-beta.0] - 2022-07-04

### Bug Fixes

- Ensure unused props fallback to their default values

### Miscellaneous Tasks

- Add notice about sourcehut migration
- Make `git-cliff` sort git tags chronologically
- Remove dangling release docker images before building
- Remove getters and setters from example project props

## [3.0.0-alpha.20] - 2022-07-03

### Features

- Allow keeping cursor after animation has finished ([#64](https://github.com/henriquehbr/svelte-typewriter/issues/64))

### Miscellaneous Tasks

- Re-add `git-cliff` configuration file

### Refactor

- Optimize warnings of unnecessary prop usage

## [3.0.0-alpha.19] - 2022-07-02

### Features

- Allow showing cursor during delay period ([#61](https://github.com/henriquehbr/svelte-typewriter/issues/61))

### Miscellaneous Tasks

- Properly display loop modes props on example project
- Wrap component child elements on a div when disabled

## [3.0.0-alpha.18] - 2022-07-02

### Documentation

- Update the default values of mode-specific props

### Features

- Add one-time loop mode ([#46](https://github.com/henriquehbr/svelte-typewriter/issues/46))

## [3.0.0-alpha.17] - 2022-07-02

### Bug Fixes

- Prevent loop modes from hiding static elements

## [3.0.0-alpha.16] - 2022-07-02

### Documentation

- Add plebeian.market to the "Used by" section
- Add usage instructions for directive-based animation modes

### Features

- Allow using animation modes through Svelte directives

## [3.0.0-alpha.15] - 2022-06-30

### Bug Fixes

- Remove references to nonexistent `isScrambleMode` variable

## [3.0.0-alpha.14] - 2022-06-29

### Documentation

- Update demo url

### Features

- Allow specifying the container element tag ([#43](https://github.com/henriquehbr/svelte-typewriter/issues/43))

## [3.0.0-alpha.13] - 2022-06-29

### Documentation

- Add Fronvo to the "Used by" section
- Remove unneeded attributes from SVG links
- Fix formatting on the "Modes" table

### Features

- Allow disabling the typewriter animation ([#77](https://github.com/henriquehbr/svelte-typewriter/issues/77))
- [**breaking**] Add `mode` prop for setting the animation mode

### Miscellaneous Tasks

- Replace `npm` with `pnpm` as package manager
- Remove `git-cliff` config file
- Setup example application deploy process

### Refactor

- Replace vitebook with example project

## [3.0.0-alpha.12] - 2022-06-21

### Bug Fixes

- Reinitialize component when props are changed

### Documentation

- Update `Unexpected token` FAQ description and solution
- Add link to issue 73 on `Unexpected token` FAQ

### Features

- Allow changing the cursor width ([#78](https://github.com/henriquehbr/svelte-typewriter/issues/78))
- [**breaking**] Set cursor color through CSS variable instead of `cursor` prop

### Miscellaneous Tasks

- Simplify version release process

### Refactor

- Replace example project with Vitebook

## [3.0.0-alpha.11] - 2022-02-11

### Bug Fixes

- Set typewriter component as commonjs entrypoint #73

### Documentation

- Add jest `Unexpected token` issue to FAQ section

## [3.0.0-alpha.10] - 2022-02-01

### Refactor

- Use style directive to pass cursor color to css

## [3.0.0-alpha.9] - 2022-01-28

### Bug Fixes

- Render children elements when js is disabled

### Miscellaneous Tasks

- Update dependencies

## [3.0.0-alpha.8] - 2022-01-26

### Miscellaneous Tasks

- Include types on npm releases
- Add component typings

## [3.0.0-alpha.7] - 2022-01-19

### Bug Fixes

- Ensure scrambled text always ends like the expected text

## [3.0.0-alpha.6] - 2022-01-12

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

- Add usage examples for `unwriteInterval` prop

## [3.0.0-alpha.5] - 2021-11-11

### Bug Fixes

- Pass `parentElement` parameter when calling itself recursively

## [3.0.0-alpha.4] - 2021-11-11

### Bug Fixes

- Properly animate elements containing a single text node

### Miscellaneous Tasks

- Update dependencies
- Replace `svelte-routing` with `tinro`
- Lock `svelte` version on 3.38.0
- Add note regarding semantic versioning on header
- Show commits scope
- Remove square brackets around versions

## [3.0.0-alpha.2] - 2021-11-06

### Documentation

- Document the `data-static` attribute

### Features

- Allow specifying static elements inside typewriter component (#41, #49)

### Miscellaneous Tasks

- Bump `svelte-typewriter` version on example lockfile before release

### Refactor

- Remove unnecessary `cleanChildNodes` helper

## [3.0.0-alpha.1] - 2021-11-05

### Bug Fixes

- Set svelte 3.28.x as `peerDependency` #60

### Documentation

- Create FAQs section

### Miscellaneous Tasks

- Update package version on lockfile

## [3.0.0-alpha.0] - 2021-11-05

### Bug Fixes

- [**breaking**] Re-add scramble and solve previous implementation issues (#35, #37)

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
- Remove esbuild ([#38](https://github.com/henriquehbr/svelte-typewriter/issues/38))
- Set `start` script to `vite preview` ([#38](https://github.com/henriquehbr/svelte-typewriter/issues/38))
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
- Allow specifying custom version

### Refactor

- [**breaking**] Remove scramble mode
- Avoid circular dependencies ([#35](https://github.com/henriquehbr/svelte-typewriter/issues/35))
- Remove unused parent element references ([#35](https://github.com/henriquehbr/svelte-typewriter/issues/35))
- Remove unneeded types ([#35](https://github.com/henriquehbr/svelte-typewriter/issues/35))
- Convert example project to typescript ([#35](https://github.com/henriquehbr/svelte-typewriter/issues/35))
- Add alias for svelte-typewriter src
- Convert example components to typescript ([#35](https://github.com/henriquehbr/svelte-typewriter/issues/35))
- Rewrite lib files in js with JSDoc typings
- Replace import aliases with relative paths
- Get all child elements instead just top-level ones
- Adapt modes to properly animate nested elements

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

- Convert "utils" into separated "helpers" ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Convert helpers and modes to typescript ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Add proper types for helpers and modes ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Add writeEffect
- Modularize cursor hiding module ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Integrate loop logic into "writeEffect" ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Unify loop and loopRandom modes
- Modularize "getLongestTextElement"
- Return Element rather TypewriterElement
- Unify both cascade and default modes ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Modularize getRandomElement from loop mode ([#33](https://github.com/henriquehbr/svelte-typewriter/issues/33))
- Reinitialize component on state update

## [2.4.4] - 2020-12-15

### Bug Fixes

- Properly filter innerHTML tags, closes #32
- Escape ampersand unicode entity, closes #31

### Miscellaneous Tasks

- Bump dependencies
- Output css to ./public/build

## [2.4.3] - 2020-12-11

### Bug Fixes

- Preserve element attributes ([#29](https://github.com/henriquehbr/svelte-typewriter/issues/29))
- Preserve element attributes, closes #29
- Re-add cursor, closes #30

### Documentation

- Add contribution steps

### Miscellaneous Tasks

- Set changelog template to "keepachangelog"

## [2.4.2] - 2020-12-11

### Bug Fixes

- Properly animate nested elements ([#25](https://github.com/henriquehbr/svelte-typewriter/issues/25))
- Adjust to work with "getElements" changes ([#25](https://github.com/henriquehbr/svelte-typewriter/issues/25))

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

