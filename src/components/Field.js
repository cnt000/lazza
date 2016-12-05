import React, { PropTypes } from 'react'

const Field = ({ children, field = {}, onChange}) => {
    let input;

     return (
        <input
          type="text"
          className="form-control"
          defaultValue={field.value}
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
