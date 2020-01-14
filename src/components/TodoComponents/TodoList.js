import React from 'react';

import Todo from './Todo'

const ToDoList = props => {
    return(
        <div>
        <div>
            {props.ToDoList.map(item => (
                <Todo 
                key={item.id} item={item} 
                completed={props.ToDoList.completed}
                checkItem={props.checkItem}
                />
            ))}
        </div>
         <button onClick={props.clearCompletedItems}>Clear Completed</button>
        </div>
    )
}

export default ToDoList;