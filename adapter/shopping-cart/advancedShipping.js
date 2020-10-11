function AdvancedShipping() {
  this.login = function (credentials) {};
  this.setStart = function (start) {};
  this.setDestination = function (destination) {};
  this.calculate = function (weight) {
    return "$39.50";
  };
}

module.exports = AdvancedShipping;
