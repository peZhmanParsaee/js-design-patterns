const Product = require("./Product");
const Category = require("./Category");

var boots = new Product("Leather boots", 79.99);
var sneakers = new Product("Kicks", 39.99);
var flipFlops = new Product("California wooks boots", 19.99);

var groupShoes = new Category("Shoes", [boots, sneakers, flipFlops]);

var groupHome = new Category("Home and Kitchen", [
  new Product("Refrigerator", 399.99),
  new Product("Oven", 199.99),
  new Category("Funiture", [
    new Product("Computer Desk", 100),
    new Product("Computer Desk Chair", 90),
  ]),
]);

var kindle = new Product("Kindle", 120);

var catalog = new Category("Catalog", [groupShoes, groupHome, kindle]);

catalog.print();
