import React, { PropTypes } from 'react'

const Field = ({ children, field = {}, onChange}) => {
    let input;

     return (
      <div>
        <b>{children}</b>
        <input defaultValue={field.value} type="text" onChange={e => {
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
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Field
