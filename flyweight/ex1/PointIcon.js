function PointIcon(type, icon) {
  Object.defineProperty(this, "type", {
    value: type,
    writable: false,
    configurable: false,
    enumerable: false,
  });
  Object.defineProperty(this, "icon", {
    value: icon,
    writable: false,
    configurable: false,
    enumerable: false,
  });
}

module.exports = PointIcon;
