function processString(str) {
  return str.substring(0, str.length / 2);
}

function processNumber(number) {
  return number * number;
}

function processBoolean(bool) {
  return !bool;
}

function processArray(arr) {
  return arr.length;
}

function processObject(obj) {
  return Object.keys(obj).length;
}

module.exports = {
  processString,
  processNumber,
  processBoolean,
  processArray,
  processObject,
};
