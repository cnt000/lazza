import React, { PropTypes } from 'react'

const SendResponse = ({ children, state, onClick }) => {
  return (
    <button className="btn btn-danger btn-lg btn-block" onClick={e => {
           e.preventDefault()
           if(!confirm('Are you sure? It\'s FINAL decision')) return false
           onClick(state)
         }}>
      {children}
    </button>
  );
}

SendResponse.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SendResponse
