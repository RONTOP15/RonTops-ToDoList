import React, { useState, useEffect, useContext } from "react";
// Components
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";
import themeContext,{themes} from "./Context/Theme_Context";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [theme , setTheme] = useState(themes.dark)

  useEffect( () => {
    const getDataFromServer = async () => {
       fetch('/api/todo',{
        method : 'GET',
        headers: {
          "Content-Type": "application/json",
          'Accept': 'application/json'
        },
      }).then(res => res.json())
      .then(data =>{
        if(!data){
          console.log(data);
          return "no Data"
        }else{
          setTodos(data)
          return data

        }
      }).catch(err => console.log(err))
      

    };

    getDataFromServer()
  }, []);

  return (
    <themeContext.Provider value={{theme , setTheme}}>
    <div  className="App">

      <div>
        <h1> RonTops ToDoList </h1>
        <div className="hero">
      </div >
      <div className="Main-Container">
      <Form
        
        setInputText={setInputText}
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}

      />
      <ToDoList todos={todos} setTodos={setTodos} />
      </div>
      </div>
    </div>
    </themeContext.Provider>
  );
}

export default App;
