import React, { PropTypes } from 'react'

const Field = ({ children, field = {}, onChange}) => {
    let input;

     return (
      <div>
        <b>{children}</b>
        <input type="text" onChange={e => {
             e.preventDefault()
             onChange(e.target.value)
         }}
         ref={node => {
             input = node;
             input.value = field.value;
         }}
         />
      </div>
  );
};

Field.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Field
