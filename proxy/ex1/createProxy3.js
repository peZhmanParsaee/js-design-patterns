function createProxy(subject) {
  var helloOrig = subject.hello;

  subject.hello = function () {
    return helloOrig.call(this) + " world";
  };

  return subject;
}
