const Mediator = require("./mediator");
const Colleague = require("./colleague");

var mediator = new Mediator();
var colleague1 = Colleague.create("colleague1", mediator);
var colleague2 = Colleague.create("colleague2", mediator);
var colleague3 = Colleague.create("colleague3", mediator);

colleague1.sendMessage("Hey there", "colleague2");
colleague2.sendMessage("Hi colleague1", "colleague1");
colleague3.sendMessage("Hey guys");
