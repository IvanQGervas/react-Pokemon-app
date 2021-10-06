import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="img-conteiner">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <span className="id-pokemon">N.º{pokemon.id}</span>
      <h2>
        <Link
          to={`/pokemon/${pokemon.name}?id=${pokemon.id}`}>
          {pokemon.name}
        </Link>
      </h2>

      {pokemon.type 
        ? <div className="conteiner-types">{pokemon.type.map(el => <span className={el.type.name + " span-type"} key={el.type.name}>{el.type.name}</span>)}</div>
        : null
      }
      
    </div>
  );
};

export default Card;