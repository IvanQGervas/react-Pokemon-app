import React, { useState, useEffect, useRef, useContext } from "react";
import listPokemonsContext from '../../context/listPokemonsContext'
import axios from "axios";
import { useDebounce } from 'use-debounce';
import cogoToast from 'cogo-toast'

import ListaPokemon from '../ListaPokemon'

const Home = () => {

  const inputSearch = useRef()
  const [inputValue, setInputValue] = useState('')
  const { listPokemon, setListPokemon } = useContext(listPokemonsContext)
  const [valueDebounce] = useDebounce(inputValue, 1800)

  useEffect(() => {
    async function axiosData() {
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
          setListPokemon([...listPokemon, objPokemon])
          inputSearch.current.value = '';
        }
      } catch (err) {
        console.log(err);
        cogoToast.error("Pokemon no encontrado! Por favor corrige tu busqueda.");
      }
    }
    axiosData()
  }, [valueDebounce])


  return (
    <div>
      <input type="text" onChange={(event) => setInputValue(event.target.value)} ref={inputSearch} />
      <ListaPokemon/>
    </div>
  );
};

export default Home;
