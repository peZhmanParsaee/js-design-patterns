const { XMLHttpRequest } = require("xmlhttprequest");

var HttpOrderSender = (function () {
  function OrderSender() {}

  OrderSender.prototype.send = function (order) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        handleResponse(response);
      }
    };

    xhr.open("POST", "/api/orders");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(order));
  };

  // OrderSender.prototype.send = function(order) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.onreadystatechange = function () {
  //     if (xhr.readyState == 4 && xhr.status == 200) {
  //       var response = JSON.parse(xhr.responseText);
  //       handleResponse(response);
  //     }
  //   };
  //   xhr.open("POST", "/api/orders");
  //   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //   xhr.send(JSON.stringify(order));
  // }

  return OrderSender;
})();

module.exports = HttpOrderSender;
