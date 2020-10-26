const level = require("level");
const levelSubscribe = require("./levelSubscribe");

var db = level(__dirname + "/db", { valueEncoding: "json" });
db = levelSubscribe(db);

db.subscribe({ doctype: "tweet", language: "en" }, function (k, val) {
  console.log(val);
});

db.put(1, { doctype: "tweet", text: "hi", language: "en" });
db.put(2, { doctype: "company", name: "Microsoft" });
