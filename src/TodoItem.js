import React, { useState } from "react";

function TodoItem(props) {
  const [completed, setCompleted] = useState(false);
  const [isBeingEdited, setBeingEdited] = useState(false);
  const [newText, setNewText] = useState(props.task.text);


function handleChange(e) {
  setNewText(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
  props.editTask(props.id, newText);
  setNewText(newText)
  setBeingEdited(false)

}

  const displayTemplate = (
    <div className="todoItem">
      <input type="checkbox" checked={props.completed} onChange={() =>  props.toggleTaskCompleted(props.id)}/>
      <p>{props.task.text}</p>
      <button type="button" onClick={() => props.deleteTask(props.id)}>x</button>
      <button type="button" onClick={() => setBeingEdited(true)}>edit</button>
    </div>
  )
  const editingTemplate = (
    <div className="todoItem">
      <input type="text" defaultValue={props.task.text} value={newText} onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>save</button>
      <button type="button" onClick={() => setBeingEdited(false)}>cancel</button>
    </div>
  )
  return(isBeingEdited ? editingTemplate : displayTemplate)
}


export default TodoItem
