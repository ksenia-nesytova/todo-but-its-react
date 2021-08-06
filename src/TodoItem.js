import React, { useState } from "react";

function TodoItem(props) {
  const [checked, setChecked] = useState(false);
  const [isBeingEdited, setBeingEdited] = useState(false);
  const [newText, setNewText] = useState('');

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
      <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)}/>
      <p>{props.task.text}</p>
      <button type="button" className="deleteTodo" onClick={() => props.deleteTask(props.id)}>x</button>
      <button type="button" className="editTodo" onClick={() => setBeingEdited(true)}>edit</button>
    </div>
  )
  const editingTemplate = (
    <div className="todoItem">
      <input type="text" onChange={handleChange}/>
      <p>{props.task.text}</p>
      <button type="submit" className="editSave" onClick={handleSubmit}>save</button>
      <button type="button" className="editCancel" onClick={() => setBeingEdited(false)}>cancel</button>
    </div>
  )
  return(isBeingEdited ? editingTemplate : displayTemplate)
}


export default TodoItem
