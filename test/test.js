'use strict'

const assert = require('assert')

const toCsv = require('..')

it('should escape double quote if it appears in cell value', function() {
    assert.equal(toCsv([
        ['asd"f']
    ]), '"asd""f"')
})

it('should add double quote if delimiter exists in cell value', function() {
    assert.equal(toCsv([
        ['asdf,1234']
    ]), '"asdf,1234"')
})

it('should work if some cells contain non-string', function() {
    assert.equal(toCsv([
        [1, true, undefined, null]
    ]), "1,true,,")
})

it('should work if some cells contain function', function() {
    assert.equal(toCsv([
        [add, add]
    ]), "1,2")
})

it('should work for Object', function() {
    assert.equal(toCsv({
        "x": ["a", "b"],
        "y": ["c", "d", "e"]
    }), "a,b\nc,d,e")
})

var add = (function() {
    var val = 0
    return function() {
        return ++val;
    }
})()