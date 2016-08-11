'use strict'
if (!Object.values)
    require('object.values/shim')();

module.exports = function(array, separator) {
    separator = separator || ','
    return (array.hasOwnProperty("length")) ? array.map(joinRow, separator).join('\n') : Object.values(array).map(joinRow, separator).join('\n')
}

function joinRow(row) {
    return row.map(escapeCell, this).join(this)
}

function escapeCell(cell) {
    cell = cell || ''
    if (typeof cell === 'function') cell = cell()
    cell = cell.toString()
    return (cell.indexOf(this) !== -1 || cell.indexOf('"') !== -1) ?
        '"' + cell.replace(/\"/g, '""') + '"' :
        cell
}