const OfflineState = require("./OfflineState");
const OnlineState = require("./OnlineState");

function FailSafeSocket(options) {
  this.options = options;
  this.queue = [];
  this.currentState = null;
  this.socket = null;
  this.states = {
    offline: new OfflineState(this),
    online: new OnlineState(this),
  };
  this.changeState("offline");
}

FailSafeSocket.prototype.changeState = function (state) {
  console.log("Activation State: " + state);
  this.currentState = this.states[state];
  this.currentState.activate();
};

FailSafeSocket.prototype.send = function (data) {
  this.currentState.send(data);
};

module.exports = function (options) {
  return new FailSafeSocket(options);
};
