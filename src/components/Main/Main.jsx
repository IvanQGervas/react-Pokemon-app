import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDebounce } from 'use-debounce';
import cogoToast from 'cogo-toast'

import ListaPokemon from '../ListaPokemon'

const Main = () => {

  const inputSearch = useRef()
  const [inputValue, setInputValue] = useState('')
  const [pokemons, setPokemons] = useState([])
  const [valueDebounce] = useDebounce(inputValue, 1800)

  useEffect(async () => {
    try {
      if (inputValue !== '') {
        const value = inputValue.toLowerCase()
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
        const data = await res.data
        console.log(data)
        const objPokemon = {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          type: data.types
        }
        setPokemons([...pokemons, objPokemon])
        inputSearch.current.value = '';
      }
    } catch (err) {
      console.log(err);
      cogoToast.error("Pokemon no encontrado! Por favor corrige tu busqueda.");
    }
  }, [valueDebounce])


  return (
    <main>
      <input type="text" onChange={(event) => setInputValue(event.target.value)} ref={inputSearch} />
      <ListaPokemon list={pokemons} />
    </main>
  );
};

export default Main;
