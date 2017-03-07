import React, { PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const GameType = ({ children, field = {}, label, onChange}) => {
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
          <MenuItem value="Pair" primaryText="Pair" />
          <MenuItem value="Co-op" primaryText="Co-op" />
          <MenuItem value="SuperPro" primaryText="SuperPro" />
        </SelectField>
      </div>
  );
};

GameType.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default GameType
