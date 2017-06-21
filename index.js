'use strict'
if (!Object.values)
    require('object.values/shim')()

module.exports = function(array, separator, alwaysQuote) {
    separator = separator || ','
    alwaysQuote = (alwaysQuote === true)
    return (Array.isArray(array)) ? array.map(joinCells, {
        separator: separator,
        alwaysQuote: alwaysQuote
    }).join('\n') : Object.values(array).map(joinCells, {
        separator: separator,
        alwaysQuote: alwaysQuote
    }).join('\n')
}

function joinCells(row) {
    return row.map(escapeCell, {
        separator: this.separator,
        alwaysQuote: this.alwaysQuote
    }).join(this.separator)
}

function escapeCell(cell) {
    cell = cell || ''
    if (typeof cell === 'function') cell = cell()
    cell = cell.toString()
    return (this.alwaysQuote || cell.indexOf(this.separator) !== -1 || cell.indexOf('"') !== -1 || cell.indexOf('\n') !== -1) ?
        '"' + cell.replace(/\"/g, '""') + '"' :
        cell
}

module.exports.joinCells = function(row, separator, alwaysQuote) {
    separator = separator || ','
    alwaysQuote = (alwaysQuote === true)
    return joinCells.call({
        separator: separator,
        alwaysQuote: alwaysQuote
    }, row)
}
module.exports.escapeCell = function(cell, separator, alwaysQuote) {
    separator = separator || ','
    alwaysQuote = (alwaysQuote === true)
    return escapeCell.call({
        separator: separator,
        alwaysQuote: alwaysQuote
    }, cell)
}
