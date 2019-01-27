import React, { Component } from "react";

class AddTodo extends React.Component {
  state = {
    value: ""
  };
  handleValueChange = value => {
    this.setState({ value });
  };
  render() {
    const { onAddTodo } = this.props;
    const { value } = this.state;

    return (
      <form
        className="form-inline"
        onSubmit={e => {
          e.preventDefault();
          if(!value) return;
          onAddTodo(value);
          this.handleValueChange("");
        }}
      >
        <div className="form-group mb-2 mr-2">
          <input
            type="text"
            className="form-control"
            placeholder="Your Todo here"
            value={value}
            onChange={e => this.handleValueChange(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2">
          Add Todo
        </button>
      </form>
    );
  }
}

export default AddTodo;
