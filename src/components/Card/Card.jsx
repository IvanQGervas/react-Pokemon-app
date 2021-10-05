import React from "react";

const Card = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="card">
      <div className="img-conteiner">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <span className="id-pokemon">N.º{pokemon.id}</span>
      <h2>{pokemon.name}</h2>
      <div className="conteiner-types">{pokemon.type.map(el => <span className={el.type.name + " span-type"} key={el.type.name}>{el.type.name}</span>)}</div>
    </div>
  );
};

export default Card;
