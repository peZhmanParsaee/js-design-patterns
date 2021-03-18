const person = {
  name: "Jack",
  place: "Chennai",
};

const handler = {
  get: function (target, prop) {
    return prop in target ? target[prop] : "Invalid Prop";
  },
  set: function (target, prop, value) {
    if (prop === "age") {
      if (value < 100) {
        target[prop] = value;
      } else {
        throw new RangeError("Invalid Age");
      }
    }
  }
};

const newPerson = new Proxy(person, handler);
console.log(`newPerson.name: ${newPerson.name}, newPerson.place: ${newPerson.place}`);
console.log(`person.name: ${person.name}, person.place: ${person.place}`);
console.log(`newPerson.age: ${newPerson.age}`);
console.log(`person.age: ${person.age}`);


newPerson.age = 25;
console.log(`newPerson.age: ${newPerson.age}`);
console.log(`person.age: ${person.age}`);

newPerson.age = 110;

