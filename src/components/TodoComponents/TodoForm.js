import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            toDo: "",
        };
    }

    onChange = e => {
        this.setState({toDo: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addToList(this.state.toDo);
    };

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
              <input 
              type="text" 
              name="item" 
              placeholder="Add To do Item" 
              value={this.state.toDo} 
              onChange={this.onChange}
              />
              <button>Add To Do</button>
          </form>
        </div>
      )
    }
}

export default TodoForm