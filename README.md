# array-to-csv

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Convert a 2D array to CSV.

```js
const toCSV = require('array-to-csv')

//Comma-seperated values
toCSV([
  ['header 1', 'header 2'],
  ['value 1', 'value 2']
])

//If you prefer using tab as delimiter
toCSV([
  ['header 1', 'header 2'],
  ['value 1', 'value 2']
], "\t")
```

## Change log
### 1.0.6
- fix cell with newline is not quoted
- added alwaysQuote parameter

### 1.0.5
- Object with array as values also works now (key will be dropped)

### 1.0.4
- array with cell containing function works now

### 1.0.3
- array with number/boolean/null/undefined should work now

### 1.0.2
- fix double quote is not being escaped.
- fix mocha test case.
- accept other delimiter.

[npm-image]: https://img.shields.io/npm/v/array-to-csv.svg?style=flat-square
[npm-url]: https://npmjs.org/package/array-to-csv
[github-tag]: http://img.shields.io/github/tag/jonathanong/array-to-csv.svg?style=flat-square
[github-url]: https://github.com/jonathanong/array-to-csv/tags
[travis-image]: https://img.shields.io/travis/jonathanong/array-to-csv.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/array-to-csv
[coveralls-image]: https://img.shields.io/coveralls/jonathanong/array-to-csv.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/jonathanong/array-to-csv
[david-image]: http://img.shields.io/david/jonathanong/array-to-csv.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/array-to-csv
[license-image]: http://img.shields.io/npm/l/array-to-csv.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/array-to-csv.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/array-to-csv
