var JsonConfig = require("./JsonConfig");

var jsonConfig = new JsonConfig();
jsonConfig.read(__dirname + "/conf.json");
jsonConfig.set("foo", "bar");
jsonConfig.save(__dirname + "/conf-mod.json");
