const pointService = require("./pointService");
const pointIconFactory = require("./pointIconFactory");

var points = pointService(pointIconFactory).getPoints();

for (var point of points) {
  point.draw();
}
