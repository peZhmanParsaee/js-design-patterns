function OnlineState(failSafeSocket) {
  this.failSafeSocket = failSafeSocket;
}

OnlineState.prototype.send = function (data) {
  this.failSafeSocket.socket.write(data);
};
module.exports = OnlineState;

OnlineState.prototype.activate = function () {
  var self = this;
  self.failSafeSocket.queue.forEach(function (data) {
    self.failSafeSocket.socket.write(data);
  });
  self.failSafeSocket.queue = [];
  self.failSafeSocket.socket.once("error", function () {
    self.failSafeSocket.changeState("offline");
  });
};
