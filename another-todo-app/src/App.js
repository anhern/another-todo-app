import React from "react";
import TodoItem from "./TodoItem"
import todosData from "./todosList"
import TodoInput from "./TodoInput"


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  handleAdd() {

  }

  render() {
    const todoItemList = this.state.todos.map(item => <TodoItem key={item.key} item={item} handleChange={this.handleChange} handleAdd={this.handleAdd} />)

    return (
      <div className="todo-list">
        <h2 style={{"fontFamily": "Courier"}}>Todo List</h2>
        <TodoInput />
        <div className="">{todoItemList}</div>
      </div>

    );
  }
}

export default App;
