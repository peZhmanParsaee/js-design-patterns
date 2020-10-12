var log = (function log() {
  var log = "";

  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      console.log(log);
      log = "";
    },
  };
})();

module.exports = log;
