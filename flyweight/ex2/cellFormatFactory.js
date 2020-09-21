var cellFormatFactory = (function () {
  var cellFormat;

  function create({ fontFamily, fontSize, fontWeight }) {
    if (!cellFormat) {
      cellFormat = {
        fontFamily,
        fontSize,
        fontWeight,
      };
    }

    return cellFormat;
  }

  return { create };
})();

module.exports = cellFormatFactory;
