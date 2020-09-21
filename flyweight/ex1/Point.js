function Point(x, y, icon) {
  this.x = x;
  this.y = y;
  this.icon = icon;
}

Point.prototype.draw = function () {
  console.log(`${this.icon.type} at (${this.x}, ${this.y})`);
};

module.exports = Point;
