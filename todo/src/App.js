import React from 'react';
import './App.css';
import TodosList from './components/TodosList';
import TodoForm from './components/TodoForm';

const App = () =>  {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Todo-title"> To-Do's List</h1>
          <TodosList />
          <TodoForm />
        </header>
      </div>
    );
  }


export default App;
