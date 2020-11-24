var fetch = require("node-fetch");

module.exports.doGet = function doGet(url) {
  return fetch(url, {
    method: "GET",
    mode: "same-origin",
  }).then((r) => r.json());
};
