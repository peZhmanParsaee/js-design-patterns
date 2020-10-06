function Validator() {}

Validator.prototype.selectValidator = function (validator) {
  this.validator = validator;

  return this;
};

Validator.prototype.validate = function (value) {
  if (this.validator) {
    return this.validator.validate(value);
  }

  throw "no validator selected";
};

module.exports = Validator;
