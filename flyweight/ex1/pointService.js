const POINT_TYPES = require("./pointTypes");
const Point = require("./Point");

function pointService(iconFactory) {
  function getPoints() {
    var points = [];

    var icon = iconFactory.getPointIcon(POINT_TYPES.CAFE);

    var point1 = new Point(1, 2, icon);
    var point2 = new Point(3, 4, icon);
    var point3 = new Point(5, 6, icon);

    points.push(point1);
    points.push(point2);
    points.push(point3);

    return points;
  }

  return { getPoints };
}

module.exports = pointService;
