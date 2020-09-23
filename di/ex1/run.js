const nodeFetch = require("node-fetch");
const { getTodosgetTodoById } = require("./todos");

getTodosgetTodoById(nodeFetch, 2).then((data) => console.log(data));
