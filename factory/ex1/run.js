const mediaFactory = require("./mediaFactory");

var myVideo = mediaFactory.createMedia("Video", {
  length: 60,
  name: "My Video",
});

var myImage = mediaFactory.createMedia("Image", {
  width: 120,
  height: 120,
  name: "My image",
});

console.log(myVideo);
console.log(myImage);
