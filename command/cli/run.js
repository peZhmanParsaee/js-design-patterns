const conductor = require("./conductor");
const { exitCommandFactory, createCommandFactory } = require("./commands");

var { createInterface } = require("readline");

// read-line interface
var rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("create filename text | history | undo | redo | exit");
rl.prompt();

rl.on("line", (input) => {
  var [commandText, ...remaining] = input.split(" ");
  var [fileName, ...fileText] = remaining;
  var text = fileText.join(" ");

  switch (commandText) {
    case "history":
      conductor.printHistory();
      break;

    case "undo":
      conductor.undo();
      break;

    case "redo":
      conductor.redo();
      break;

    case "exit":
      conductor.run(exitCommandFactory());
      break;

    case "create":
      conductor.run(createCommandFactory(fileName, text));
      break;

    default:
      console.log(`${commandText} command not found!`);
  }
});

rl.prompt();
