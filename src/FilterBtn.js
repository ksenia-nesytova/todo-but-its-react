import React from "react"

function FilterBtn(props) {
  return(
    <button
      type="button"
      className="filterBtn"
      aria-pressed={props.isPressed}
      onClick={() => props.setFilter(props.name)}
      >
        <span>Show </span>
        <span>{props.name}</span>
        <span> tasks</span>
      </button>
  )}

export default FilterBtn
