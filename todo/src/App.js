import React, { Component } from 'react';
import './App.css';
import TodosList from './components/TodosList';

class App extends Component {

  state = {
    todos: [
      { id: 1, todo: 'Create React/Redux To Do App' },
      { id: 2, todo: 'Commit and push code to GitHub' },
      { id: 3, todo: 'Fill Out Daily Retrospective Form' },
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Todo-title"> To-Do's List</h1>
          <TodosList />
        </header>
      </div>
    );
  }
}

export default App;
