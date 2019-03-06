
import { ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = { 
    todos: [
        {
            value: "Create To-Do App",
            completed: false
        }
    ] };

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload] 
                // state.todos.push(action.payload)
            };
        case TOGGLE_TODO:
        return{
            ...state,
            todos: state.todos.map((todo, index) =>  {
                if(index === action.payload) {
                    return {...todo, completed: !todo.completed}
                }
            })
        }
        default: 
            return state;
    }
} 