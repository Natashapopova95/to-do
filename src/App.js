import { React, useEffect, useState} from "react";
import './App.css';
import { Input } from "./components/Input/Input";
import { Todos } from "./components/Todos/Todos";

function App() {
  
 const [todos, setTodos] = useState(()=> {
  const sevedTodos = localStorage.getItem('todos');
  if(sevedTodos){
    return JSON.parse(sevedTodos)
  } else{
  return []
    }
 });

 useEffect(()=> {
   if (console.log(localStorage.getItem('t') === undefined)) 
     localStorage.setItem('todos', JSON.stringify(todos))
 }, [todos])

//функция записывает измененное значение из инпут
 const submitAddTodo = (objTodo)=> {
   let result= {
    todo:objTodo,
    active: false,
   }
   setTodos([...todos, result])
 }

  const handleActiveTodo = (todo) => {
   console.log(todo);
   const updateTodo = todos.map(item => ({
    active: item.todo === todo ? !item.active : item.active,
    todo: item.todo
   }));

   setTodos(updateTodo);
 }

 const hendleDeleteTodo =(todo) => {
  const result = todos.filter(item => (
    item.todo !== todo
  ))

  setTodos(result)
 }

  return (
    <div className="App">
      <Input submitAddTodo={submitAddTodo} />
      {todos.length > 0 && todos.map(item => (
        <Todos item={item} key={item.todo}
          handleActiveTodo={handleActiveTodo}
          hendleDeleteTodo={hendleDeleteTodo} />
      ))}
    </div> 
  );
}

export default App;
