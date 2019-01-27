import React, { Component } from "react";
import TodoItem from "./Components/TodoItem";

class TodoList extends Component {

  render() {
    const {list} = this.props;
    return (
      list.map(({id, ...rest}) => <TodoItem key={id} {...rest} />)
    );
  }
}

export default TodoList;
