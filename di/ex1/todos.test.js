const assert = require("assert");
const { getTodosgetTodoById } = require("./todos");

describe("getTodos", () => {
  it("works well in basic condition", () => {
    const fakeFetch = (url) => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve({
            hi: true,
          });
        },
      });
    };

    getTodosgetTodoById(fakeFetch, 123).then((todo) => {
      assert(todo.hi === true);
    });
  });
});
