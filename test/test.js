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

it('should add double quote if newline exists in cell value', function() {
    assert.equal(toCsv([
        ['abc\ndef']
    ]), '"abc\ndef"')
})

it('should add double quote if alwaysQuote is true', function() {
    assert.equal(toCsv([
        ['a']
    ],",",true), '"a"')
})

it('should add double quote to the first two cells', function() {
    assert.equal(toCsv.joinCells(['a\t','b\t','c']
    ,"\t"), '"a\t"\t"b\t"\tc')
})

it('should add double quote to the first two cells', function() {
    assert.equal(toCsv.joinCells(['a,','b,','c']
    ,","), '"a,","b,",c')
})

it('should add double quote to this cell', function() {
    assert.equal(toCsv.escapeCell('a,'
    ,","), '"a,"')
})

var add = (function() {
    var val = 0
    return function() {
        return ++val;
    }
})()
