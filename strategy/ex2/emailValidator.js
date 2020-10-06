function validate(value) {
  var emailRegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9\-]+\.)+([a-zA-Z]{2,4})$/g;
  return emailRegEx.test(value);
}

module.exports = { validate };
