import React, { useContext, useState } from "react";
import listPokemonsContext from '../../context/listPokemonsContext';

const New = () => {

  const [idCount, setIdCount] = useState(1119) // En la Api de pokemon actualmente hay 1118 pokemons
  const { listPokemon, setListPokemon } = useContext(listPokemonsContext)

  const handleOnSubmit = (event) => {
    event.preventDefault()

    const newPokemon = {
      id: idCount,
      name: event.target.name.value,
      image: event.target.image.value,
      type: event.target.typeTwo.value
        ? [{ type: { name: event.target.typeOne.value } }, { type: { name: event.target.typeTwo.value } }]
        : [{ type: { name: event.target.typeOne.value } }]
      , // Todo esta transformación es para adaptar los types a los recibidos por la api, para que no haya problemas a la hora de imprimir en Card
    }

    setIdCount(idCount + 1)
    setListPokemon([...listPokemon, newPokemon])

    event.target.reset()
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Nombre</label>
        <input name="name" required />

        <label>Imagen</label>
        <input name="image" required />

        <label>Tipo de Pokemon (1)</label>
        <input name="typeOne" required />

        <label>Tipo de Pokemon (2)</label>
        <input name="typeTwo" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default New;
