import React from 'react';
import { connect } from 'react-redux';
// import { addTodo } from '../actions';
import {toggleTodo } from '../actions';

const TodosList = (props) => {
    return (
        <div className="todos-list-container">


            {props.todos.map((todo, index) => (
                <h1 key={index}> {todo.value} </h1>
        ))}
                    {/* <input 
                        className="todos-list-input" 
                        type="text"
                        placeholder="New Todo Item"
                    />
            <button className="todos-list-button">Add To-do</button> */}
            <div className="todos-list">
            
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
    
}

export default connect(mapStateToProps, { toggleTodo })(TodosList);