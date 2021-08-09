import React, { useState, useRef, useEffect } from "react";

function TodoItem(props) {
  const [completed, setCompleted] = useState(false);
  const [isBeingEdited, setBeingEdited] = useState(false);
  const [newText, setNewText] = useState(props.task.text);

  const inputRef = useRef(null);
  const buttonRef = useRef(null);

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
        <button type="button" onClick={() => setBeingEdited(true)} ref={buttonRef}>edit</button>
      </div>
    )
    const editingTemplate = (
      <div className="todoItem">
        <input
          id={props.id}
         type="text"
         defaultValue={props.task.text}
         value={newText}
         onChange={handleChange}
         ref={inputRef}/>
        <button type="submit" onClick={handleSubmit}>save</button>
        <button type="button" onClick={() => setBeingEdited(false)}>cancel</button>
      </div>
    )

    useEffect(() => {
      if(isBeingEdited) {
        inputRef.current.focus();
      }
    }, [isBeingEdited])

    return(isBeingEdited ? editingTemplate : displayTemplate)
}


export default TodoItem
