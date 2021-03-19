class Greetings {
  english() { return 'Hello'; }
  spanish() { return 'Hola'; }
}

class MoreGreetings {
  german() { return 'Hallo'; }
  french() { return 'Bonjure'; }
}

const greetings = new Greetings();
const moreGreetings = new MoreGreetings();

const proxy = new Proxy(moreGreetings, {
  get: function(target, property) {
    return target[property] || greetings[property];
  }
});

console.log(proxy.french());
console.log(proxy.english());
