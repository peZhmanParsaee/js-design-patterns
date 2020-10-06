const Strategy = require("./Strategy");
const telValidator = require("./telValidator");
const emailValidator = require("./emailValidator");

var validator = new Strategy();

console.log(validator.selectValidator(telValidator).validate(12345678900));
console.log(
  validator.selectValidator(emailValidator).validate("test@gmail.com")
);
