function MenuItem(name) {
  this.name = name;
}

MenuItem.prototype.print = function (space) {
  console.log(space + "  " + this.name);
};

module.exports = MenuItem;
