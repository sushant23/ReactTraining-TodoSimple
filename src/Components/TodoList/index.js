import React, { Component } from "react";
import TodoItem from "./Components/TodoItem";

class TodoList extends Component {
  render() {
    const { list, onStatusChange } = this.props;
    return (
      <ul className="list-group">
        {list.map(({ id, ...rest }) => (
          <li key={id} className="list-group-item">
            <TodoItem onStatusChange={(newStatus) => onStatusChange(id, newStatus)} {...rest} />
          </li>
        ))}
      </ul>
    );
  }
}

export default TodoList;
