import React, { useState, useEffect, useRef, useContext } from "react";
import listPokemonsContext from '../../context/listPokemonsContext'
import { useDebounce } from 'use-debounce';
import axios from "axios";
import cogoToast from 'cogo-toast'

import ListaPokemon from '../ListaPokemon'

import logo from '../../assets/img/logo.png'

const Home = () => {

  const inputSearch = useRef()
  const [inputValue, setInputValue] = useState('')
  const { listPokemon, setListPokemon } = useContext(listPokemonsContext)
  const [valueDebounce] = useDebounce(inputValue, 1800) // Libreria debounce, inseta el valor de inputValue en valueDebounce una vez que el usuario deja de actualizar el estado y pasan los milisegundos estabelcidos como segundo parametro.

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
    <div className="home">
      <div className="home--search-conteiner">
        <div className="home--conteiner-logo">
          <img className="home-logo" src={logo} alt="Logo PokeApp" />
        </div>
        <h1>¡Crea tu equipo Pokemon!</h1>
        <h2>Puedes buscar por nombre, codigo pokedes o crear tus propios Pokemons</h2>
        <div className="input-conteiner">
          <input type="text" onChange={(event) => setInputValue(event.target.value)} ref={inputSearch} />
          <div className="conteiner-icon">
            <i class="gg-pokemon"></i>
          </div>
        </div>
      </div>
      <ListaPokemon />
    </div>
  );
};

export default Home;
