'use strict'

module.exports = function (array, separator) {
  separator=separator || ",";
  return array.map(joinRow, separator).join('\n');
}

function joinRow(row) {
  return row.map(escapeCell,this).join(this);
}

function escapeCell(cell) {
  cell = cell || "";
  cell = cell.toString();
  return (cell.indexOf(this) != -1 || cell.indexOf("\"") != -1)?
    '"' + cell.replace(/\"/g,"\"\"") + '"'
    : cell;
}
