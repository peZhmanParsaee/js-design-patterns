const Shipping = require("./shipping");
const ShippingAdapter = require("./shippingAdapter");
const log = require("../../common/log");

var shipping = new Shipping();
var credentials = { token: "abc-123" };
var adapter = new ShippingAdapter(credentials);

var cost = shipping.request("12542", "88541", "2.5 kg");
log.add("old cost: " + cost);

cost = adapter.request("12542", "88541", "2.5 kg");

log.add("new cost: " + cost);
log.show();
