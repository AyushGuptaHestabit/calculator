import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className='container my-5'>
          <div className='row my-5'>
            <h1>Calculator</h1>
            <Calculator />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
