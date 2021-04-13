import React, { useContext } from "react";
import themeContext, { themes } from "../Context/Theme_Context";
import "../Styles/App.css";
import Todo from "./Todo";

const ToDoList = ({ todos, setTodos }) => {

  console.log("Todolist");
  return (
    <div className="todo-container" >
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo} setTodos={setTodos} todos={todos} />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
