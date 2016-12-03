import React, { PropTypes } from 'react'

const SendResponse = ({ children, state, onClick }) => {
  return (
    <button onClick={e => {
           e.preventDefault()
           confirm('Are you sure? It\'s FINAL decision')
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
