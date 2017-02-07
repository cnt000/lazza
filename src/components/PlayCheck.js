import React, { PropTypes } from 'react'

const PlayCheck = ({ children, field = {}, onChange}) => {
    return (
      <span>
      <input
      type="checkbox"
      defaultChecked={field.value}
      onChange={e => {
         onChange(e.target.checked)
      }}
      /> Play</span>
  );
};

PlayCheck.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default PlayCheck
