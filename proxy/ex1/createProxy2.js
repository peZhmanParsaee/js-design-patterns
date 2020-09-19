function createProxy(subject) {
  return {
    hello: function () {
      return subject.hello() + " World!";
    },
    goodbye: function () {
      return subject.goodbye.apply(subject, arguments);
    },
  };
}
