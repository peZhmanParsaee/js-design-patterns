const _ = require("lodash");

var person = {
  id: 1,
  name: "Pezhman",
  interests: ["javascript", "node", "react", "web"],
};

// shallow
var clone = Object.assign({}, person);
var clone2 = { ...person };
var clone3 = _.clone(person);

console.log(clone.interests === clone2.interests);
console.log(clone2.interests === clone3.interests);

// deep
var copiedPerson = JSON.parse(JSON.stringify(person));
console.log(copiedPerson.interests === person.interests);
