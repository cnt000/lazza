import React, { PropTypes } from 'react'

const SelectPlayer = ({ children, field = {}, players, onChange}) => {
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
          <option value="" >Select...</option>
          {players.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </div>
  );
};

SelectPlayer.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default SelectPlayer
