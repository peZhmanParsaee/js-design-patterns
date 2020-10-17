const Handler = require("../Handler");
const emailHandler = require("./email");

var smsHandler = new Handler("sms", handleSms, emailHandler);

function handleSms(sms) {
  console.log(`sms sent to number: ${sms.number}, message: ${sms.message}`);
}

module.exports = smsHandler;
