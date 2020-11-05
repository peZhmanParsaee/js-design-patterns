const fs = require("fs");
const createProxy = require("./createLoggingWritable");

var writable = fs.createWriteStream(__dirname + "/test.txt");
var writableProxy = createProxy(writable);
writableProxy.write("first chun\n");
writableProxy.write("2nd chunk\n");
writable.write("this is not logged\n");
writableProxy.end();
