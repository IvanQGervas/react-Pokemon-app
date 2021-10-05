import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import listPokemonsContext from './context/listPokemonsContext';
import './styles/styles.scss'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'


function App() {

  const [listPokemon, setListPokemon] = useState([])


  return (
    <listPokemonsContext.Provider value={{ listPokemon, setListPokemon }}>
      <div className="app">
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        <Footer />
      </div>
    </listPokemonsContext.Provider>
  );
}

export default App;