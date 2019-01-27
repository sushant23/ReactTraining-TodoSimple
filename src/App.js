import React, { Component } from "react";
import "./App.css";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
import { replaceElementInArray } from "./util";

class App extends Component {
  state = {
    todoList: []
  };

  handleAddTodo = text => {
    this.setState({
      todoList: [...this.state.todoList, { id: Date.now(), text, completed: false }]
    });
  };

  handleStatusChange = (todoId, newStatus) => {
    const { todoList } = this.state;
    const itemIndex = todoList.findIndex(({ id }) => id === todoId);
    if (!itemIndex === -1) return;
    const currentTodo = todoList[itemIndex];
    const newTodo = { ...currentTodo, completed: newStatus };
    const newTodoList = replaceElementInArray(todoList, itemIndex, newTodo);
    this.setState({ todoList: newTodoList });
  };

  handleRemove=(todoId) => {
    this.setState({todoList: this.state.todoList.filter(({id}) => id !== todoId)})
  }

  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <div className="page-header text-center">
          <h1>Todo App</h1>
        </div>
        <div className="content mt-4">
          <AddTodo onAddTodo={this.handleAddTodo} />
          <TodoList list={todoList} 
          onStatusChange={this.handleStatusChange} 
          onRemove={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

export default App;
