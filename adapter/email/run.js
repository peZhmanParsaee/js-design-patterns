const client = require("./emailClient");
const GmailAdapter = require("./GmailAdapter");

client.addProvider(new GmailAdapter());
client.downloadEmails();
