import React, { useState } from "react";

function AddTodo(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    props.addTask(text)
  }


  return(
    <div id="addTodo">
      <input type="text" id="addTodo-input" value={text} placeholder="Add new todo" onChange={handleChange} />
      <button type="submit" id="addTodo-btn" onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default AddTodo
