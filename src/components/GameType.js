import React, { PropTypes } from 'react'

const GameType = ({ children, field = {}, onChange}) => {
    return (
      <div>
        <select
          className="form-control"
          type="type-of-game"
          defaultValue={field.value}
          onChange={e => {
             e.preventDefault()
             onChange(e.target.value)
         }}
         >
          <option value="Pair">Pair</option>
          <option value="Co-op">Co-op</option>
          <option value="SuperPro">SuperPro</option>
        </select>
      </div>
  );
};

GameType.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default GameType
