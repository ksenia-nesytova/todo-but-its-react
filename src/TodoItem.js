import React, { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(false);

  return(
    <div className="todoItem">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      <p>{props.task.text}</p>
      <button type="button" className="deleteTodo" onClick={() => props.deleteTask(props.id)}>x</button>
    </div>
  )
}


export default TodoItem
