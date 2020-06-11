import React from 'react';
import './App.css';
import Paragraph from './components/Paragraph';
import Variables from './components/Variables';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi React</h1>
        <Events />
      </header>
    </div>
  );
}

export default App;
