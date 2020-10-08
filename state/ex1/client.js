const createFailSafeSocket = require("./FailSafeSocket");

const failSafeSocket = createFailSafeSocket({ port: 5000 });

setInterval(() => {
  var usage = process.memoryUsage();
  console.log(`client send: ${JSON.stringify(usage)}`);
  failSafeSocket.send(usage);
}, 1000);
