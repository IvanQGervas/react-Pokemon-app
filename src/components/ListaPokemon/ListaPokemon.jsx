import React from "react";
import Card from '../Card'

const ListaPokemon = ({ list }) => {
  return (
    <div>
      {list
        ? list.map( pokemon => <Card pokemon={pokemon} key={pokemon.name} /> )
        : null
      }
    </div>
  );
};

export default ListaPokemon;
