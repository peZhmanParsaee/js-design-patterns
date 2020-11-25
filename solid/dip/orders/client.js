const HttpOrderSender = require("./http-order-sender");
const OrderManager = require("./order-manager");

var httpOrderSender = new HttpOrderSender();
var orderManager = new OrderManager(httpOrderSender);

orderManager.createOrder(10);
orderManager.addItem({
  id: 100,
  category: "Cloths",
  name: "Jacket",
  price: 29.99,
});
orderManager.addItem({
  id: 110,
  category: "Cloths",
  name: "Pants",
  price: 15.99,
});

orderManager.sendOrder();
