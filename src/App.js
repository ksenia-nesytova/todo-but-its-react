import './App.css';
import TodoItem from './TodoItem';
import AddTodo from "./AddTodo"
import React, { useState } from "react"
import { nanoid } from "nanoid";


function App(props) {
  const [tasks, displayTasks] = useState(props.tasks);

  const todoItems = tasks.map(task => <TodoItem task={task} id={task.id} completed={task.completed} key={task.id} deleteTask={deleteTask} editTask={editTask}/>)

  function addTask(text) {
    const newTodo = { id: "item" + nanoid(), text: text, completed: false };
    displayTasks([...tasks, newTodo])
  }

  function deleteTask(id) {
    const tasksRemaining = tasks.filter(task => id !==task.id)
    displayTasks(tasksRemaining)
  }

  function editTask(id, newText) {
    const todoItemsEdited = tasks.map(
      task => {
        if(id === task.id) {
          return{...task, text: newText}
        }
        return task
      }
    )
    displayTasks(todoItemsEdited)
  }

  return (
    <>
    <div className="todoList">
      {todoItems.length < 1 && <h2>You have nothing to do</h2>}
      {todoItems}
    </div>
    <AddTodo addTask={addTask} />
    </>
  );
}

export default App;
