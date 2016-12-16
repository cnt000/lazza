import React, { PropTypes } from 'react'

const Play = ({ field = {}, onChange}) => {
    let input;

     return (
          <span className="input-group-addon activePlayer">
          <input
            type="checkbox"
            defaultChecked={field.value}
            onChange={e => {
               onChange(e.target.checked)
           }}
           /> Play</span>
  );
};

Play.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Play
