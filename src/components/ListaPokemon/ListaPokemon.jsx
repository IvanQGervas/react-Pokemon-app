import React, { useContext } from "react";
import listPokemonsContext from '../../context/listPokemonsContext';
import Card from '../Card'

const ListaPokemon = () => {

  const { listPokemon } = useContext(listPokemonsContext)
  console.log('list',listPokemon);
  return (
    <div>
      {listPokemon
        ? listPokemon.map(pokemon => <Card pokemon={pokemon} key={pokemon.name} />)
        : null
      }
    </div>
  );
};

export default ListaPokemon;
