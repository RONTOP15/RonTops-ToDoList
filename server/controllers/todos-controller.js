const mongoose = require("mongoose");
const Todo = require("../models/Todo");
const moment = require("moment");
mongoose.set("useFindAndModify", false);

// Get All Todos
const getTodos = async (req, res) => {
  try {
    await Todo.find({}, (err, todos) => {
      if (todos.length < 1) {
        res.status(200).send("Such empty");
      } else {
        res.status(200).json(todos);
      }
    });
  } catch (error) {
    throw error
  }
};


// Create New Todo
async function createTodo(req, res) {
  try {
    const todo = new Todo({ text: req.body.text });
    await todo.save();
    res.status(200).send(todo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
}

// Toggle Completed
const completeTodo = async (req, res) => {
  try {
    Todo.findOne({ _id: req.params.id }, (err, todo) => {
      if(!todo){
        res.status(204).send("No Task Found")
        console.log("AWDAWD");
      }else{
        todo.completed = !todo.completed;
        todo.save();
        res.send(todo);
      }

    });
  } catch (error) {
    console.log(error.message);
  }
};

// Remove Todo
const removeTodo = async (req, res) => {
  try {
    await Todo.findOneAndRemove({ _id: req.params.id }, (todo) => {
      if (todo) {
        res.send("No Task Found!");
      } else {
        return res.status(200).send(`Task Deleted!!`);
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

module.exports = {
  getTodos,
  createTodo,
  completeTodo,
  removeTodo,
};
