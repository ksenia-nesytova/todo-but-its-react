import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';
import todosData from "./todosData"
import AddTodo from "./AddTodo"



function App() {
  const todoItems = todosData.map(item => <TodoItem item={item} key={item.id}/>)

  return (
    <>
    <div className="todoList">
    {todoItems}
    </div>
    <AddTodo />
    </>
  );
}

export default App;
