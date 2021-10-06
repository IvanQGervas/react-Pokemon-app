import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import queryString from 'query-string'

import listPokemonsContext from '../../context/listPokemonsContext'

const Details = (props) => {

  const idQuerys = queryString.parse(props.location.search);

  const [description, setDescription] = useState('');
  const { listPokemon } = useContext(listPokemonsContext)

  const pokemon = listPokemon.filter(pok => pok.id.toString() === idQuerys.id)[0] // Uno es un string, y otro un number

  // const changeStateDescriptionInUseEffect = (value) => setDescription(value);

  useEffect(() => {
    async function fetchForDescription() {
      if (pokemon.id >= 1119) {
        console.log('poke', pokemon);
        setDescription(pokemon.description)
      } else {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idQuerys.id}/`);
        const data = res.data;
        setDescription(data.flavor_text_entries[26].flavor_text)
      }
    }
    fetchForDescription()
  }, [])

  console.log(pokemon.stats);
  return (
    <div className="details">

      <div className="details--img-name-description">

        <div className="details--img-grid">

          <div className="container-img">
            <img src={pokemon.image} alt={pokemon.name} />
          </div>
          <span className="span-id-pokemon">N.º {pokemon.id}</span>
        </div>

        <div className="details--name-description-types">
          <h1>{pokemon.name}</h1>
          <p>{description}</p>
          <div className="details--types">{pokemon.type.map(el => <span className={el.type.name + " span-type"} key={el.type.name}>{el.type.name}</span>)}</div>
        </div>

      </div>

      {pokemon.stats
        ? <div className="details--stats">
          <h2>Stats</h2>
          <div className="details--stats-grid">

            {pokemon.stats.map(el => {
              return (
                <div className="conteiner-stat">
                  <h3>{el.name}: {el.stat}</h3>
                  <div className="conteiner-bar">
                    <div className="conteiner-bar-value" style={{ width: `${Math.round((el.stat * 100) / 250)}%` }}></div>{/*El maximo por stat en pokemon es 250*/}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        : null

      }


    </div>
  );
};

export default Details;