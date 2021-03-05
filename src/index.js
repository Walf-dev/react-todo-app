import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "Wake up", completed: false },
  { id: "todo-1", name: "Take a bath", completed: false },
  { id: "todo-2", name: "Take a breakfast", completed: false },
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
