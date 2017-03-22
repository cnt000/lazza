import React, { PropTypes } from 'react'
import TextField from 'material-ui/TextField'

const Field = ({ field = {}, label = '', onChange, input}) => {
     return (
      <TextField
        defaultValue={field.value}
        floatingLabelText={label}
        onChange={e => {
           e.preventDefault()
           onChange(e.target.value)
       }}
       ref={node => {
           input = node;
       }}
      />
  );
};

Field.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Field
