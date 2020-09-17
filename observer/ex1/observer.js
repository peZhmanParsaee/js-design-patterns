function observerFactory(state) {
  var observerState = state;

  return {
    getState: function () {
      return observerState;
    },
    update: function (subject) {
      observerState = subject.getState();
      console.log("Observer state updated");
    },
  };
}

function subjectFactory() {
  var observers = [];
  var state = 0;

  return {
    attach: function (observer) {
      observers.push(observer);
    },
    detach: function (ix) {
      observers.splice(ix, 1);
      console.log(`observer with index ${ix} was detached`);
    },
    notify: function () {
      for (var i = 0; i < observers.length; i++) {
        observers[i].update(this);
      }
    },
    getState: function () {
      return state;
    },
    setState: function (s) {
      state = s;
    },
  };
}

var observer1 = observerFactory(1);
var observer2 = observerFactory(2);

console.log(`Observer 1 state: ${observer1.getState()}`);
console.log(`Observer 2 state: ${observer2.getState()}`);

var subject = subjectFactory();
subject.attach(observer1);
subject.attach(observer2);

subject.setState(10);
subject.notify();

console.log(`Observer 1 state: ${observer1.getState()}`);
console.log(`Observer 2 state: ${observer2.getState()}`);

subject.detach(0);
subject.setState(20);

subject.notify();
console.log(`Observer 1 state: ${observer1.getState()}`);
console.log(`Observer 2 state: ${observer2.getState()}`);
