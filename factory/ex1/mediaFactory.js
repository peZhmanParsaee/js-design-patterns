var media = {
  Image: require("./image"),
  Video: require("./video"),
};

function createMedia(type, attributes) {
  var mediaType = media[type];

  return new mediaType(attributes);
}

module.exports = { createMedia };
