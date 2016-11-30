import React, { PropTypes } from 'react'
import './Vote.css';

const Vote = ({ children, onClick, type }) => {
  let annotationButtonClass = (/-annotation/i).test(type) ? 'annotation vote' : 'vote' ;
  return (
    <button className={annotationButtonClass} onClick={e => {
           e.preventDefault()
           onClick()
         }}>
      {children}
    </button>
  );
}

Vote.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Vote
