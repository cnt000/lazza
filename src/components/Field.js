import React, { PropTypes } from 'react'

const Field = ({ children, field = {}, onChange}) => {
    let input;

     return (
      <div>
        <b>{children}</b>
        <input
          type="text" 
          defaultValue={field.value}
          onChange={e => {
             e.preventDefault()
             onChange(e.target.value)
         }}
         ref={node => {
             input = node;
         }}
         />
      </div>
  );
};

Field.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Field
