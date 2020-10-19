const fs = require("fs");
const path = require("path");

function exitCommandFactory() {
  return {
    name: "exit .... bye!",
    execute: function () {
      process.exit(0);
    },
  };
}

function createCommandFactory(fileName, text) {
  return {
    name: `create ${fileName}`,
    execute: function () {
      var fullPath = path.join(__dirname, fileName);
      fs.writeFile(fullPath, text, (f) => f);
    },
    undo: function () {
      var fullPath = path.join(__dirname, fileName);
      fs.unlink(fullPath, (f) => f);
    },
  };
}

module.exports = { exitCommandFactory, createCommandFactory };
