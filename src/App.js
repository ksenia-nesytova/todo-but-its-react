import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from "./todosData"
import AddTodo from "./AddTodo"
import React, { useState } from "react"
import { nanoid } from "nanoid";


function App(props) {
  const [tasks, displayTasks] = useState(props.tasks);

  const todoItems = tasks.map(task => <TodoItem task={task} id={task.id} completed={task.completed} key={task.id} deleteTask={deleteTask}/>)

  function addTask(text) {
    const newTodo = { id: "item" + nanoid(), text: text, completed: false };
    displayTasks([...tasks, newTodo])
  }

  function deleteTask(id) {
      console.log("deleted")
  }

  return (
    <>
    <div className="todoList">
    {todoItems}
    </div>
    <AddTodo addTask={addTask} />
    </>
  );
}

export default App;
