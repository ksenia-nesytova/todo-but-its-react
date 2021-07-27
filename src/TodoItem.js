import React from "react"


function TodoItem(props) {
  return(
    <div className="todoItem">
      <input type="checkbox" checked={props.item.completed}/>
      <p>{props.item.text}</p>
    </div>
  )
}


export default TodoItem
