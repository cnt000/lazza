import React, { PropTypes } from 'react'

const Vote = ({ children, onClick }) => (
  <button onClick={e => {
         e.preventDefault()
         onClick()
       }}>
    {children}
  </button>
)

Vote.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Vote
