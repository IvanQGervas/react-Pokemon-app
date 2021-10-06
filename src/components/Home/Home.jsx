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
        const preSearch = listPokemon.filter(el => el.name.toString() === inputValue || el.id.toString() === inputValue)
        if (inputValue !== '') {
          if (preSearch.length === 0) {
            const value = inputValue.toLowerCase()
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            const data = await res.data
            let stats = []
            data.stats.forEach(el => stats.push({ name: el.stat.name, stat: el.base_stat }))
            const objPokemon = {
              id: data.id,
              name: data.name,
              image: data.sprites.other['official-artwork']['front_default'],
              type: data.types,
              stats
            }
            setListPokemon([...listPokemon, objPokemon])
            inputSearch.current.value = '';
          } else {
            cogoToast.info("El Pokemon que buscas ya esta en tu lista.");
            inputSearch.current.value = '';
          }
        }
      } catch (err) {
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
        <h2>Puedes buscar por nombre, codigo pokedex o crear tus propios Pokemons</h2>
        <div className="input-conteiner">
          <input type="text" onChange={(event) => setInputValue(event.target.value)} ref={inputSearch} />
          <div className="conteiner-icon">
            <i class="gg-pokemon"></i>
          </div>
        </div>
        <h3>Haz click en cada pokemon para ver mas detalles sobre el</h3>
      </div>
      <ListaPokemon />
    </div>
  );
};

export default Home;
