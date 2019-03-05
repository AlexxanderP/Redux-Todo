import React from 'react';


const TodosList = props => {
    return (
        <div className="todos-list-container">
            <input 
                className="todos-list-input" 
                type="text"
                placeholder="New Todo Item"
            />
            <button className="todos-list-button">Add Todo</button>
            <div className="todos-list">
            
            </div>
        </div>
    );
};

export default TodosList;