# Codify.css

[![Build Status](https://travis-ci.org/zdroid/codify.css.svg?branch=master)](https://travis-ci.org/zdroid/codify.css)
[![devDependency Status](https://david-dm.org/zdroid/codify.css/dev-status.svg)](https://david-dm.org/zdroid/codify.css#info=devDependencies)

> A minimal and customizable CSS normalization library

Codify.css is focused on providing needed corrections for modern browsers,
instead of supporting old, unmaintained and almost unused browsers.
Based on [Normalize.css](https://github.com/necolas/normalize.css).

## Download

- [**ZIP package**](https://github.com/zdroid/codify.css/archive/master.zip)
- **Bower:** `bower install codify.css`

### CDN

- [cdnjs](http://cdnjs.com/libraries/codify.css/)
- [jsDelivr](http://www.jsdelivr.com/#!codify.css) (latest at
`//cdn.jsdelivr.net/codify.css/latest/codify.min.css`)

## Core changes

(compared to Normalize.css)

- Modules
- Support for older browsers removed
- CSSComb support
- Improved display definitions
- Consistent element styles
- Improved vertical align of embedded content
- Responsive images

## Browser support

- **Chrome** (latest)
- **Firefox** (latest)
- **Opera** (latest)
- **Edge** (latest)
- **Safari 7+**
- **Internet Explorer 10+**

## Compile

Codify.css uses [Grunt](http://gruntjs.com) to compile Less code.

### Dependencies

You need [node.js](http://nodejs.org/download/) to use Grunt.

From the command line:

1. Install `grunt-cli` globally with `[sudo] npm install -g grunt-cli`.
2. Run `npm install` from the root Codify.css directory to install
   dependencies.

When completed, you'll be able to run the various Grunt commands provided from
the command line.

## Modules

Modules are individual files within `src/`, without a `.less` extension.

- **base**
- **display**
- **text**
- **embed**
- **forms**
- **tables**

### Commands

#### Default: `grunt [--modules="module..."]`

Compiles Less files.

`--modules` is a space-separated list of modules. If `--modules` option is
used, Grunt will only compile specified modules.

#### Watch: `grunt watch [--modules="module..."]`

Watches Less files and recompiles them when they're changed.

## License

MIT &copy; [Zlatan Vasović](https://github.com/zdroid)
