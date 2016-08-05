'use strict'

const assert = require('assert')

const toCsv = require('..')

it('should escape double quote', function () {
  assert.equal(toCsv([['asd"f']]), '"asd""f"')
})

it('should add double quote if delimiter exists', function () {
  assert.equal(toCsv([['asdf,1234']]), '"asdf,1234"')
})

it('should work for non-string', function () {
  assert.equal(toCsv([[1, true, undefined, null]]), ["1", "true", "", ""])
})
