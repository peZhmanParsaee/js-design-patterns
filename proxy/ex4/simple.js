const subject = {
  name: "Pezhman",
  place: "Shiraz",
};

const handler = {};
const proxy = new Proxy(subject, handler);
console.log(proxy.name, proxy.place);
console.log(proxy.age);
