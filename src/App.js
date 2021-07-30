import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from "./todosData"
import AddTodo from "./AddTodo"
import React, { useState } from "react"



function App(props) {
  const [tasks, displayTasks] = useState(props.tasks);

  const todoItems = tasks.map(task => <TodoItem task={task} id={task.id} completed={task.completed} key={task.id}/>)

// Temporary
  function addTask(text) {
    const newTodo = { id: "id", text: text, completed: false };
    displayTasks([...tasks, newTodo])
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
