const Handler = require("../Handler");
const smsHandler = require("./sms");

var callHandler = new Handler("call", handleCall, smsHandler);

function handleCall(call) {
  console.log(
    `call placed to number ${call.number} from number ${call.ownNumber}`
  );
}

module.exports = callHandler;
