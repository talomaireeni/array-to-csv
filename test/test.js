'use strict'

const assert = require('assert')

const toCsv = require('..')

it('should escape "s', function () {
  assert.equal(toCsv([['asd"f']]), '"asd""f"')
})

it('should escape `,`s', function () {
  assert.equal(toCsv([['asdf,1234']]), '"asdf,1234"')
})
