function validate(value) {
  return /^[0-9]{11}$/g.test(value);
}

module.exports = { validate };
