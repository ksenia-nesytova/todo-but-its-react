import React, { useState } from "react";

function AddTodo(props) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e) {

  }

  return(
    <input type="text" id="addTodo-input" value={text} placeholder="Add new todo" onChange={handleChange} />
  )
}




export default AddTodo
