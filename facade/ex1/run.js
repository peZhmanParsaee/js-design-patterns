const facade = require("./facade");

console.log(facade.processThing("this is a string"));
console.log(facade.processThing(true));
console.log(facade.processThing(12.5));
console.log(facade.processThing([10, 20, 30]));
console.log(facade.processThing({ name: "Pezhman" }));
