import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const GameType = ({ children, field = {}, label, onChange, gameType}) => {
    return (
      <div>
        <SelectField
          type="type-of-game"
          floatingLabelText={label}
          value={field.value}
          autoWidth={true}
          onChange={e => {
             e.preventDefault()
             onChange(e.target.textContent)
         }}
        >
          <MenuItem value={null} primaryText="" />
          {gameType.map((type)=> <MenuItem value={type} key={type} primaryText={type} /> )}
        </SelectField>
      </div>
  );
};

GameType.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default GameType
