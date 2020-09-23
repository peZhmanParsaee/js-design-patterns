exports.getTodosgetTodoById = function getTodoById(fetch, id) {
  return fetch("https://jsonplaceholder.typicode.com/todos/" + id)
    .then((response) => response.json())
    .then((data) => data);
};
