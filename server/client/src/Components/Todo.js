import React, { useState, useContext } from "react";
import "../Styles/App.css";
import themeContext from "../Context/Theme_Context";

export const Todo = ({ todo, todos, setTodos }) => {
  const { theme } = useContext(themeContext);

  

  const completeHandler = () => {
    fetch("'/api/todo'" + todo._id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTodos(
          todos.map((item, index) => {
            if (item._id === todo._id) {
              return {
                ...item,
                completed: !item.completed,
              };
            }
            return item;
          })
        );
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const trashHandler = () => {
    fetch('/api/todo' + todo._id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).catch((err) => console.log(err));
    setTodos(() => todos.filter((el) => el._id !== todo._id));
  };

  return (
    <div style={theme} className={`todo ${todo.completed ? "completed" : ""}`}>
      <li
        id={todo._id}
        className={`todo-item ${todo.completed ? "completed" : ""}`}
      >
        {todo.text}
      </li>
      <div className="btnDiv">
        
        <button
        style={theme}
          name="complete-btn"
          className="btn complete-btn"
          onClick={completeHandler}
        >
          <i className="far fa-check-square"></i>
        </button>

        <button
        style={theme}
          name="trash-btn"
          className="btn trash-btn"
          onClick={trashHandler}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
