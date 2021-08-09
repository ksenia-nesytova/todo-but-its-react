import React, { useState } from "react"
import { nanoid } from "nanoid";
import './App.css';
import TodoItem from './TodoItem';
import AddTodo from "./AddTodo"
import FilterBtn from "./FilterBtn"


function App(props) {
  const [tasks, displayTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All')

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  }

  const FILTER_NAMES = Object.keys(FILTER_MAP)

  function toggleTaskCompleted(id) {
    const tasksUpdated = tasks.map(task => {
      if(id === task.id) {
        return {...task, completed:!task.completed}
      }
      return task
    })
    displayTasks(tasksUpdated)
  }

  const todoItems = tasks
  .filter(FILTER_MAP[filter])
  .map(task => <TodoItem task={task} id={task.id} completed={task.completed} key={task.id} deleteTask={deleteTask} editTask={editTask}       toggleTaskCompleted={toggleTaskCompleted}/>);


  const filterList = FILTER_NAMES.map(name => (
    <FilterBtn
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

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
    {filterList}
    </>
  );
}

export default App;
