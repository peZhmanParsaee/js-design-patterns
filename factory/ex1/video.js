function Video(attributes) {
  this.length = attributes.length || 0;
  this.name = attributes.name || "";
}

module.exports = Video;
