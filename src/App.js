import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import listPokemonsContext from './context/listPokemonsContext';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'


function App() {

  const [listPokemon, setListPokemon] = useState([])


  return (
    <listPokemonsContext.Provider value={{listPokemon, setListPokemon}}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </div>
    </listPokemonsContext.Provider>
  );
}

export default App;