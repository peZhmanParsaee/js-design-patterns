const userFactory = require("./userFactory");

var pezhman = userFactory("Pezhman Parsaee", 120);
var linus = userFactory("Linus Torvalds", 150, "employee", "Linux Foundation");

linus.payDay(1000);

console.log(pezhman);
console.log(linus);
