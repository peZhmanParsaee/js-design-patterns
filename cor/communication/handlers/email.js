const Handler = require("../Handler");

var emailHanlder = new Handler("email", handleEmail, null);

function handleEmail(email) {
  console.log(`Email sent to ${email.recipient} - message: ${email.message}`);
}

module.exports = emailHanlder;
