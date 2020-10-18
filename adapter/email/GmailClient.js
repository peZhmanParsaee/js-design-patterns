var GmailClient = (function GmailClient() {
  function connect() {
    console.log("connect");
  }

  function getEmails() {
    console.log("get emails");
  }

  function disconnect() {
    console.log("disconnect");
  }

  return {
    connect,
    getEmails,
    disconnect,
  };
})();

module.exports = GmailClient;
