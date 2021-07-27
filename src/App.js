import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';

function App() {
  return (
    <div className="todoList">
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
