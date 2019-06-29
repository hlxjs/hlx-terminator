hlx-[![Build Status](https://travis-ci.org/hlxjs/hlx-terminator.svg?branch=master)](https://travis-ci.org/hlxjs/hlx-terminator)
[![Coverage Status](https://coveralls.io/repos/github/hlxjs/hlx-terminator/badge.svg?branch=master)](https://coveralls.io/github/hlxjs/hlx-terminator?branch=master)
[![Dependency Status](https://david-dm.org/hlxjs/hlx-terminator.svg)](https://david-dm.org/hlxjs/hlx-terminator)
[![Development Dependency Status](https://david-dm.org/hlxjs/hlx-terminator/dev-status.svg)](https://david-dm.org/hlxjs/hlx-terminator#info=devDependencies)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)


# hlx-terminator
A writable stream to write hls data to nowhere (/dev/null)

## Features
* Being used with other [`hls-streams`](https://github.com/hls-streams) objects, it provides a functionality to terminate the stream pipeline.

## Install
[![NPM](https://nodei.co/npm/hlx-terminator.png?mini=true)](https://nodei.co/npm/hlx-terminator/)

## Usage

```js
const {createReadStream} = require('hlx-file-reader');
const {createLogger} = require('hlx-logger');
const {createTerminator} = require('hlx-terminator'); // terminator

const src = createReadStream('https://foo.bar/sample.m3u8');
const logger = createLogger({
  level: 'detail'
});
const dest = createTerminator();

// Print all playlists/segments to stdout
src.pipe(logger).pipe(dest)
.on('error', err => {
  console.log(err.stack);
});
```
## API
The features are built on top of the Node's [`Writable Stream`](https://nodejs.org/api/stream.html#stream_writable_streams).

### `createTerminator()`
Creates a new `WriteStream` object.

#### params
None

#### return value
An instance of WriteStream.

### `WriteStream`
A subclass of [stream.Writable](https://nodejs.org/api/stream.html#stream_writable_streams) that just ignore every [`hls-parser`](https://github.com/kuu/hls-parser) objects.
