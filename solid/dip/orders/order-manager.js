const Order = require("./order");

var OrderManager = (function () {
  var discounters = [];
  var orderSender;

  function OrderManager(sender) {
    orderSender = sender;
  }

  OrderManager.prototype.createOrder = function (customerId) {
    this.order = new Order(customerId);
    console.log("this in createOrder is: ", this);
  };

  OrderManager.prototype.addItem = function (item) {
    this.order.items.push(item);
    this.order.totalAmount = this.order.totalAmoutn + item.price;
  };

  OrderManager.prototype.sendOrder = function () {
    if (this.isValid(this.order)) {
      this.applyDiscount(this.order);

      // TODO
      // var orderSender = new orderSender();
      orderSender.send(this.order);
    } else {
      handleError({ message: "Not valid order!" });
    }
  };

  OrderManager.prototype.isValid = function (order) {
    return order.items.length > 0;
  };

  OrderManager.prototype.registerDiscounter = function (discounter) {
    discounters.push(discounter);
  };

  OrderManager.prototype.applyDiscount = function (order) {
    var i;

    for (i = 0; i < discounters.length; i++) {
      if (discounters[i].isApplicable(order)) {
        discounters[i].apply(order);
        break;
      }
    }
  };

  return OrderManager;
})();

module.exports = OrderManager;
