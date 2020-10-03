function Menu(name, description) {
  this.name = name;
  this.description = description;
  this.nodes = [];
}

Menu.prototype.add = function (node) {
  this.nodes.push(node);
};

Menu.prototype.remove = function (i) {
  this.nodes.splice(i, 1);
};

Menu.prototype.getChild = function (i) {
  return this.nodes[i];
};

Menu.prototype.print = function (space = "") {
  console.log("\n");
  console.log(space + this.name);
  console.log(space + "-------------------------");

  for (const node of this.nodes) {
    node.print(space + "   ");
  }
};

module.exports = Menu;
