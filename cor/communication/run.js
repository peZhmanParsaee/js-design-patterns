const Handler = require("./Handler");
const callHandler = require("./handlers/call");

var call = {
  type: "call",
  number: "0234567",
  ownNumber: "0123456",
};

var sms = {
  type: "sms",
  number: "09174442233",
  message: "Hey you !",
};

var email = {
  type: "email",
  recipient: "alaki@hello.com",
  message: "Hi Alaki",
};

var telepathy = {
  type: "esp",
  target: "someone else",
  message: "spooky",
};

var handler = new Handler(null, null, callHandler);
handler.handleCommunication(email);
handler.handleCommunication(sms);
handler.handleCommunication(call);
handler.handleCommunication(telepathy);
