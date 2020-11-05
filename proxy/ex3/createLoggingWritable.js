function createLoggingWritable(writableOrig) {

  function LoggingWritable() {
    this.writableOrig = writableOrig;
  }
  
  var proto = Object.getPrototypeOf(writableOrig);
  LoggingWritable.prototype = Object.create(proto);
  LoggingWritable.prototype.constructor = LoggingWritable;

  LoggingWritable.prototype.write = function (chunk, encoding, cb) {
    if (!cb && typeof encoding === "function") {
      cb = encoding;
      encoding = undefined;
    }

    console.log("writing ", chunk);

    return this.writableOrig.write(chunk, encoding, function () {
      console.log("finished writing ", chunk);
      cb && cb();
    });
  };

  LoggingWritable.prototype.on = function () {
    return this.writableOrig.on.apply(this.writableOrig, arguments);
  };

  LoggingWritable.prototype.end = function () {
    return this.writableOrig.end.apply(this.writableOrig, arguments);
  };

  return new LoggingWritable();
}

module.exports = createLoggingWritable;
