import React, { Component } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";

class App extends Component {
  state = {
    todoList: [
      {
        id: "1",
        text: "test"
      }
    ]
  };
  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <div className="page-header text-center">
          <h1>Todo App</h1>
        </div>
        <div className="content mt-4">
          <AddTodo />
          <TodoList list={todoList} />
        </div>
      </div>
    );
  }
}

export default App;
