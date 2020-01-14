import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

const ListOfToDos = [
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

  checkItem = id => {
    const checkedItemList = this.state.ToDoList.map(item => {
      if (item.id === id){
        return{
          ...item, 
          completed: !item.completed
        };
      } else {
        return item
      }

    });
    this.setState({
      ToDoList: checkedItemList
    })
  }

  clearCompletedItems = () => {
    // const completedList = this.state.TodoList
    // console.log(completedList);
    const completedList = this.state.ToDoList.filter(function (el) {
      return el.completed === false;
    })

    this.setState({ToDoList: completedList})
  }

  render() {
    return (
      <div className = "App">
        <div className = "header">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addToList = {this.addToList}/>
        </div>
        <TodoList 
        ToDoList = {this.state.ToDoList} 
        checkItem = {this.checkItem}
        clearCompletedItems = {this.clearCompletedItems}
        />
      </div>
    );
  }
}

export default App;
