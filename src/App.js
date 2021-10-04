import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;