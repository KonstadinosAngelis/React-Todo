import React from 'react';

import Todo from './Todo'

const ToDoList = props => {
    return(
        <div>
            {props.ToDoList.map(item => (
                <Todo key={item.id} item={item} completed={props.ToDoList.completed}/>
            ))}
        </div>
    )
}

export default ToDoList;