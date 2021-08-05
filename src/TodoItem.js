import React, { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const [isBeingEdited, setBeingEdited] = useState(false);
  const [newtext, setNewText] = useState('');

  return(
    <div className="todoItem">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      <p>{props.task.text}</p>
      <button type="button" className="deleteTodo" onClick={() => props.deleteTask(props.id)}>x</button> <button type="button" className="editTodo" onClick={() => props.editTask(props.id)}>edit</button>
    </div>
  )
}


export default TodoItem
