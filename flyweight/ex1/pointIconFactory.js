const PointIcon = require("./PointIcon");

var pointIconFactory = (function () {
  var icons = new Map();

  function getPointIcon(type) {
    if (!icons.has(type)) {
      icons.set(type, new PointIcon(type, null));
    }
    return icons.get(type);
  }

  return { getPointIcon };
})();

module.exports = pointIconFactory;
