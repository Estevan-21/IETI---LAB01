import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todo} from './Todo'
import {TodoList} from './TodoList'
import {TodoApp} from './TodoApp';

function App() {
  const todos = [{text:"Learn React", priority:5, dueDate: new Date() },
          {text:"Learn about APIs", priority:4, dueDate: new Date(2018,8,30) },
          {text:"write TODO App", priority:3, dueDate: new Date(2018,9,30) }];
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Todo-List
        </h1>
        <TodoApp />
      </header>
    </div>
  );
}


export default App;
