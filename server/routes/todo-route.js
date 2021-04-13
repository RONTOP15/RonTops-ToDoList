const {
  getTodos,
  createTodo,
  completeTodo,
  removeTodo
} = require("../controllers/todos-controller");
const router = require("express").Router();

router
  .get("/", getTodos)
  .post("/", createTodo)
  .patch('/:id',completeTodo)
  .delete('/:id', removeTodo)

module.exports = router;
