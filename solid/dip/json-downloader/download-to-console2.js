const { doGet } = require("./utils");

const URL = "https://jsonplaceholder.typicode.com/posts";

function downloadDataFromApi(params) {
  doGet(URL).then((r) => {
    console.log("Posts: ", r);
  });
}

downloadDataFromApi();
