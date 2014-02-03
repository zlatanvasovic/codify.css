# Sanitize.css [![Build status](https://travis-ci.org/ZDroid/sanitize.css.png?branch=master)](https://travis-ci.org/ZDroid/sanitize.css) [![devDependency status](https://david-dm.org/ZDroid/sanitize.css/dev-status.png?theme=shields.io)](https://david-dm.org/ZDroid/sanitize.css#info=devDependencies)

> Minimal CSS normalization library

Based on the
[Normalize.css](https://github.com/necolas/normalize.css).

## Download

* [**Fine-packed ZIP**](https://github.com/ZDroid/sanitize.css/archive/master.zip)
* **Bower:** `bower install sanitize.css`

Sanitize.css is also available on
[cdnjs](http://cdnjs.com/libraries/sanitize.css/).

## Core changes

* Modules
* Improved comments
* Improved display definitions
* Consistent and modern element styles
* Improved vertical align of embedded content
* Responsive images

## Browser support

* **Chrome**
* **Chromium**
* **Safari** for OS X and iOS
* **Firefox**
* **Opera**
* **Internet Explorer 9+**

## Compile

Wuzzle uses [Grunt](http://gruntjs.com) to compile Less code.

### Dependencies

You need [node.js](http://nodejs.org/download/) to use Grunt.

From the command line:

```bash
$ npm install -g grunt-cli
$ npm install # from the root Sanitize.css directory
```

When completed, you'll be able to run the various Grunt commands provided from
the command line.

### Commands

#### Default: `grunt [--modules="module..."]`

Compiles Less files. If `--modules` option is used, it will just compile
specified modules.

#### Watch: `grunt watch`

Watches Less files and automatically compiling them when they're changed.

## License

MIT &copy; [Zlatan Vasović](https://github.com/ZDroid)