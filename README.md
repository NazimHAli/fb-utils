# fb-utils

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> Firebase utility functions to help working with firebase easier.

Motivation was after following the official docs/examples I ended up with gray hair trying to deploy a simple Cloud Function that caches Firestore queries/data. The idea is to abstract re-usable methods for anyone working with firebase/firestore.

## Install

```bash
yarn add fb-utils

npm install fb-utils
```

## Usage

```ts
import { cacheFirestoreQuery } from "fb-utils";

cacheFirestoreQuery("hello");
//=> 'hello from my package'
```

## API

### cacheFirestoreQuery(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### postfix

Type: `string`
Default: `rainbows`

Lorem ipsum.

[build-img]: https://github.com/NazimHAli/fb-utils/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/NazimHAli/fb-utils/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/fb-utils
[downloads-url]: https://www.npmtrends.com/fb-utils
[npm-img]: https://img.shields.io/npm/v/fb-utils
[npm-url]: https://www.npmjs.com/package/fb-utils
[issues-img]: https://img.shields.io/github/issues/NazimHAli/fb-utils
[issues-url]: https://github.com/NazimHAli/fb-utils/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
