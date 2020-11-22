const person = {
  name: "Jack",
  place: "Chennai",
};
const handler = {
  get: function (target, prop) {
    return prop in target ? target[prop] : "Invalid Prop";
  },
};

const newPerson = new Proxy(person, handler);
console.log(newPerson.name, newPerson.place);
console.log(newPerson.age);
