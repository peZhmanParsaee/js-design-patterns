var emailClient = (function () {
  var providers = [];

  function addProvider(provider) {
    providers.push(provider);
  }

  function downloadEmails() {
    for (const provider of providers) {
      provider.downloadEmails();
    }
  }

  return {
    addProvider,
    downloadEmails,
  };
})();

module.exports = emailClient;
