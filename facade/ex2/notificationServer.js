const Connection = require("./Connection");

var notificationServer = (function () {
  function connect(ipAddress) {
    console.log("connected");
    return {
      disconnect: function () {
        console.log("disconnected");
      },
    };
  }

  function authenticate(appID, key) {
    console.log("authenticated");
  }

  function send(authToken, message, target) {
    console.log("sending a message");
  }

  return {
    connect,
    authenticate,
    send,
  };
})();

module.exports = notificationServer;
