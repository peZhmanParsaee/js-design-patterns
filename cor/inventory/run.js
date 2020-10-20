const Store = require("./Store");
const inventory = require("./inventory");

var skiShop = new Store("Steep and Deep", inventory);

var searchItem = "wax";
var results = skiShop.find(searchItem);

console.log(results);
