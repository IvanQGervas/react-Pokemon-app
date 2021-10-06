import React, { useContext, useState } from "react";
import cogoToast from 'cogo-toast'

import listPokemonsContext from '../../context/listPokemonsContext';
import Card from '../Card'

const New = () => {

  // States inputs
  const [name, setName] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [typeOne, setTypeOne] = useState('')
  const [typeTwo, setTypeTwo] = useState('')

  const [idCount, setIdCount] = useState(1119) // En la Api de pokemon actualmente hay 1118 pokemons
  const [typeOneSelected, setTypeOneSelected] = useState(false)
  const { listPokemon, setListPokemon } = useContext(listPokemonsContext)


  const handleChangeTypeOne = (event) => {
    event.target.value !== ""
      ? setTypeOneSelected(true)
      : setTypeOneSelected(false);

    setTypeOne(event.target.value)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()

    // regex
    const nameRegex = /\b[A-Za-z]{3,9}\b/;

    if (event.target.name.value.match(nameRegex)) {
      if (event.target.typeOne.value === event.target.typeTwo.value) {

        cogoToast.error("Un Pokemon no puede tener dos tipos identicos.");

      } else {
        const newPokemon = {
          id: idCount,
          name: event.target.name.value,
          image: event.target.image.value,
          description: event.target.description.value,
          type: event.target.typeTwo.value
            ? [{ type: { name: event.target.typeOne.value } }, { type: { name: event.target.typeTwo.value } }]
            : [{ type: { name: event.target.typeOne.value } }]
          , // Todo esta transformación es para adaptar los types a los recibidos por la api, para que no haya problemas a la hora de imprimir en Card
        }
        setIdCount(idCount + 1)
        setListPokemon([...listPokemon, newPokemon])

        // Reset inputs y states
        event.target.reset()
        setName('')
        setUrlImage('')
        setTypeOne('')
        setTypeTwo('')
      }

    } else {
      cogoToast.error("El nombre del Pokemon solo debe contener caracteres no especiales. Minimo 3 y máximo 9.");
    }
  }


  return (
    <div className="new">
      <form onSubmit={handleOnSubmit} className="new--form">

        <label className="new--form-label">Nombre *</label>
        <input className="new--form-input" name="name" required onChange={(e) => setName(e.target.value)} />

        <label className="new--form-label">Url imagen *</label>
        <input className="new--form-input" name="image" required onChange={(e) => setUrlImage(e.target.value)} />

        <label className="new--form-label">Descripción *</label>
        <textarea className="new--form-input" name="description" cols="40" rows="5"></textarea>

        <label className="new--form-label">Tipo de Pokemon *</label>
        <select className="new--form-input" name="typeOne" id="typeone" onChange={handleChangeTypeOne} required>
          <option value="">--Selección--</option>
          <option value="electric">electric</option>
          <option value="normal">normal</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="ice">ice</option>
          <option value="rock">rock</option>
          <option value="flying">flying</option>
          <option value="grass">grass</option>
          <option value="psychic">psychic</option>
          <option value="ghost">ghost</option>
          <option value="bug">bug</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="dragon">dragon</option>
          <option value="steel">steel</option>
          <option value="fighting">fighting</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
        </select>

        {typeOneSelected === true
          ? (<><label className="new--form-label">Segundo tipo (opcional)</label>
            <select className="new--form-input" name="typeTwo" id="typeone" onChange={(e) => setTypeTwo(e.target.value)}>
              <option value="">--Selección--</option>
              <option value="electric">electric</option>
              <option value="normal">normal</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
              <option value="ice">ice</option>
              <option value="rock">rock</option>
              <option value="flying">flying</option>
              <option value="grass">grass</option>
              <option value="psychic">psychic</option>
              <option value="ghost">ghost</option>
              <option value="bug">bug</option>
              <option value="poison">poison</option>
              <option value="ground">ground</option>
              <option value="dragon">dragon</option>
              <option value="steel">steel</option>
              <option value="fighting">fighting</option>
              <option value="dark">dark</option>
              <option value="fairy">fairy</option>
            </select></>)
          : null
        }

        <input className="new--form-submit" value="CREAR POKEMON" type="submit" />
      </form>

      {urlImage || name || typeOne
        ? <div className="container-card"><Card pokemon={{ image: urlImage, name: name, id: idCount, type: typeTwo ? [{ type: { name: typeOne } }, { type: { name: typeTwo } }] : !typeOne ? null : [{ type: { name: typeOne } }] }} /></div>
        : null
      }
      

    </div>
  );
};

export default New;