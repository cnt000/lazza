import React, { PropTypes } from 'react'
import './Vote.css';

const Vote = ({ children, onClick }) => (
  <button className="vote" onClick={e => {
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
