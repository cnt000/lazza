import React, { PropTypes } from 'react'

const SelectPlayer = ({ children, field = {}, players, onChange}) => {
    return (
      <div>
      {console.log(players)}
        <select
          className="form-control"
          type="type-of-game"
          defaultValue={field.value}
          onChange={e => {
             e.preventDefault()
             onChange(e.target.value)
         }}
          >


          <option value="" >Select...</option>
          <option value="Andrea Ludergnani"> Andrea Ludergnani</option>
          <option value="Andrea Festi">Andrea Festi</option>
          <option value="Andrea Dini">Andrea Dini</option>
          <option value="Andrea Meola">Andrea Meola</option>
          <option value="Andrea Piemontese">Andrea Piemontese</option>
          <option value="Andrea Poli">Andrea Poli</option>
          <option value="Anna Merlo">Anna Merlo</option>
          <option value="Clay Collerà">Clay Collerà</option>
          <option value="Edoardo Turri">Edoardo Turri</option>
          <option value="Edoardo Gargano">Edoardo Gargano</option>
          <option value="Fabio Girotto">Fabio Girotto</option>
          <option value="Fabio Nizzo">Fabio Nizzo</option>
          <option value="Filippo Bortot">Filippo Bortot</option>
          <option value="Gianluca Giglio">Gianluca Giglio</option>
          <option value="Jakub Kostel">Jakub Kostel</option>
          <option value="Lollo SuperSound">Lollo SuperSound</option>
          <option value="Luca Sansò">Luca Sansò</option>
          <option value="Luca Restaino">Luca Restaino</option>
          <option value="Manuel Cesari">Manuel Cesari</option>
          <option value="Marco Prati">Marco Prati</option>
          <option value="Matteo Gaddoni">Matteo Gaddoni</option>
          <option value="Mattia Colombari">Mattia Colombari</option>
          <option value="Mattia Lambertini">Mattia Lambertini</option>
          <option value="Mirco Zanchetta">Mirco Zanchetta</option>
          <option value="Paolo Magni">Paolo Magni</option>
          <option value="Riccardo Anversa">Riccardo Anversa</option>
          <option value="Silvina Porsch">Silvina Porsch</option>
          <option value="Toby Künzel">Toby Künzel</option>
        </select>
      </div>
  );
};

SelectPlayer.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SelectPlayer
