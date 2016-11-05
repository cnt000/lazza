import React, { PropTypes } from 'react'

const Field = ({ children, onChange}) => (
  <div>
    <b>{children}</b>
    <input type="text" onChange={e => {
         e.preventDefault()
         onChange(e.target.value)
     }} />
  </div>
)

Field.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Field
