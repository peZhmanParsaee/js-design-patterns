const jot = require("json-over-tcp");

function OfflineState(failSafeSocket) {
  this.failSafeSocket = failSafeSocket;
}

module.exports = OfflineState;

OfflineState.prototype.send = function (data) {
  this.failSafeSocket.queue.push(data);
};

OfflineState.prototype.activate = function () {
  var self = this;

  function retry() {
    setTimeout(function () {
      self.activate();
    }, 500);
  }

  self.failSafeSocket.socket = jot.connect(
    self.failSafeSocket.options,
    function () {
      self.failSafeSocket.socket.removeListener("error", retry);
      self.failSafeSocket.changeState("online");
    }
  );
  self.failSafeSocket.socket.once("error", retry);
};
