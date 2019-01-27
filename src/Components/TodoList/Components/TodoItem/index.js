import React from "react";
import "./TodoItem.css";

const TodoItem = ({ text, completed, onStatusChange }) => (
  <div
    onClick={() => onStatusChange(!completed)}
    className={completed ? "completed" : ""}
  >
    {text}
  </div>
);

export default TodoItem;
