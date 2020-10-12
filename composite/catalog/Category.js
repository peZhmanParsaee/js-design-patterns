class Category {
  constructor(name, composites = []) {
    this.name = name;
    this.composites = composites;
  }

  get total() {
    var total = this.composites.reduce((sum, item) => {
      sum += item.total;
      return sum;
    }, 0);
    return total;
  }

  print() {
    console.log(`\n${this.name.toUpperCase()}`);

    for (var item of this.composites) {
      item.print();
    }
  }
}

module.exports = Category;
