import React from 'react';
// import logo from './logo.svg';
import './App.css';

import {useState} from 'reinspect';
// Big O Notation
// you need to know how running time increases as the list size increasing


function App() {
   const [input, setInput] = useState('', 'input State')


  return (
    <div className="App">
        <div>
            <input 
            type = 'text' 
            placeholder = 'enter max list value'
            onChange = {(e) => setInput(e.target.value)}
            />
            <button
            
            > Build sorted list</button>
        </div>
    </div>
  );
}

export default App;
