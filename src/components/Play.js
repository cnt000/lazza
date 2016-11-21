import React, { PropTypes } from 'react'

const Play = ({ field = {}, onChange}) => {
    let input;

     return (
      <div>
        <input
          type="checkbox"
          defaultChecked={field.value}
          onChange={e => {
             onChange(e.target.value)
         }}

         />
      </div>
  );
};

Play.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Play
