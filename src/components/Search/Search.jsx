import React, { useEffect } from "react";
import axios from "axios";

const Search = () => {

  useEffect(() => {
    async function axiosAllPokemons() {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon')
      const data = await res.data
      console.log(data);
    }
    axiosAllPokemons()
  }, [])

  return (
    <h1>hola</h1>
  );
};

export default Search;
