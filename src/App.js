import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const ListOfToDos = [
  {
    task: 'Dummy Data',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ToDoList: ListOfToDos
    };
  }

  addToList = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    
    this.setState({
      ToDoList: [...this.state.ToDoList, newTask]
    });
  };

  render() {
    return (
      <div className = "App">
        <div className = "header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addToList = {this.addToList}/>
        </div>
        <TodoList ToDoList = {this.state.ToDoList}/>
      </div>
    );
  }
}

export default App;
