import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const SendResponse = ({ children, state, onClick }) => {
  return (
    <RaisedButton
      label={children}
      secondary={true}
      buttonStyle={{width: '60vw'}}
      onTouchTap={e => {
           e.preventDefault()
           if(!confirm('Are you sure? It\'s FINAL decision')) return false
           onClick(state)
         }}
    />
  );
}

SendResponse.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default SendResponse
