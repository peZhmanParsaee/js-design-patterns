const URL = "https://jsonplaceholder.typicode.com/posts";

function downloadDataFromApi(params) {
  fetch(URL, {
    method: "GET",
  })
    .then((r) => r.json())
    .then((r) => {
      console.log(r);
    });
}
