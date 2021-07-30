import React, { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(false);

  return(
    <div className="todoItem">
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      <p>{props.task.text}</p>
    </div>
  )
}


export default TodoItem
