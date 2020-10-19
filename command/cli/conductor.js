var conductor = (function Conductor() {
  var history = [];
  var undone = [];

  function run(command) {
    console.log(`Executing command: ${command.name}`);
    command.execute();
    history.push(command);
  }

  function printHistory() {
    history.forEach((command) => console.log(command.name));
  }

  function undo() {
    var command = history.pop();
    console.log(`undo ${command.name}`);
    command.undo();
    undone.push(command);
  }

  function redo() {
    var command = undone.pop();
    console.log(`redo ${command.name}`);
    command.execute();
    history.push(command);
  }

  return {
    run,
    printHistory,
    undo,
    redo,
  };
})();

module.exports = conductor;
