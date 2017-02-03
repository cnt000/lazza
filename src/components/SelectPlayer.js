import React, { PropTypes } from 'react'

const SelectPlayer = ({ children, field = {}, players, onChange, onLoad}) => {
    return (
      <div>
        <button onClick={e => {
                   e.preventDefault()
                   onLoad('test')
               }}>load</button>
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
          {players.length > 0 && players.map(option =>
            <option value={option.name} key={option.name}>
              {option.name}
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
