import React from "react";

const Card = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
     <img src={pokemon.image} alt={pokemon.name} />
      <h2>{pokemon.name} - {pokemon.id}</h2>
      <div>{pokemon.type.map( el => <span key={el.type.name}>{el.type.name}</span>)}</div>
    </div>
  );
};

export default Card;
