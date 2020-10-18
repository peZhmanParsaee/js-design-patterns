const gmailClient = require("./GmailClient");

function GmailAdapter() {}

GmailAdapter.prototype.downloadEmails = function () {
  gmailClient.connect();
  gmailClient.getEmails();
  gmailClient.disconnect();
};

module.exports = GmailAdapter;
