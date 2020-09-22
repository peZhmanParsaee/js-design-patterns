const notificationServer = require("./notificationServer");

var notificationService = (function () {
  function send(message, target) {
    var connection = notificationServer.connect();
    var token = notificationServer.authenticate();
    notificationServer.send(token, message, target);
    connection.disconnect();
  }

  return { send };
})();

module.exports = notificationService;
