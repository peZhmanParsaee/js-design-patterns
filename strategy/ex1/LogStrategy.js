const fs = require("fs");
const path = require("path");
const morse = require("morse");

class LogStrategy {
  static toMorseCode(timestamp, message) {
    var morseCode = morse.encode(message);
    console.log(morseCode);
  }

  static noDate(timestamp, message) {
    console.log(message);
  }

  static toFile(timestamp, message) {
    var filename = path.join(__dirname, "logs.txt");
    fs.appendFile(filename, `${timestamp} - ${message} \n`, (err) => {
      if (err) {
        console.log("Error writing to file");
        console.error(err);
      }
    });
  }

  static toConsole(timestamp, message) {
    console.log(`${timestamp} - ${message}`);
  }

  static none() {}
}

module.exports = LogStrategy;
