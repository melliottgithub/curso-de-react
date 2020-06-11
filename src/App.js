import React from 'react';
import './App.css';
import Paragraph from './components/Paragraph';
import Variables from './components/Variables';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi React</h1>
        <Paragraph />
        <Variables />
      </header>
    </div>
  );
}

export default App;
