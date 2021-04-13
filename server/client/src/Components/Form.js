import React from "react";
import themeContext, { themes } from "../Context/Theme_Context";
import "../Styles/App.css";

const Form = ({ setInputText, inputText, todos, setTodos }) => {
  const { theme, setTheme } = React.useContext(themeContext);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return null;
    }

    fetch("http://localhost:5000/api/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",           
      },
      body: JSON.stringify({ text: inputText }),
    })
      .then((res) => res.json())
      .then((todo) => {
        console.log(todo);
        setTodos([...todos, todo]);
      })

      .catch((err) => console.log(err));

    setInputText("");
  };

  const toggleTheme = (e) => {
    e.preventDefault();
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

  return (
    <form className="form">
      <input
        name={inputText}
        value={inputText}
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        required="required"
      />
      <button className='add-btn raise' onClick={handleClick}> Add</button>

      <button className="theme-btn raise" onClick={toggleTheme}>
      <i class="fas fa-palette"></i>
      </button>
  
    </form>
  );
};

export default Form;
