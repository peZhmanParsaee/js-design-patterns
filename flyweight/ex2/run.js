const sizeof = require("object-sizeof");
const SpreadSheet = require("./SpreadSheet");
const Cell = require("./Cell");
const cellFormatFactory = require("./cellFormatFactory");

var defaultCellFormat = cellFormatFactory.create({
  fontFamily: "vazir",
  fontSize: 14,
  fontWeight: 400,
});

var cells = [
  new Cell("A1", defaultCellFormat),
  new Cell("B1", defaultCellFormat),
  new Cell("C1", defaultCellFormat),
  new Cell("A2", defaultCellFormat),
  new Cell("B2", defaultCellFormat),
  new Cell("C2", defaultCellFormat),
  new Cell("A3", defaultCellFormat),
  new Cell("B3", defaultCellFormat),
  new Cell("C3", defaultCellFormat),
];

var sheet = new SpreadSheet(cells);
console.log(sizeof(cells)); // 1008
