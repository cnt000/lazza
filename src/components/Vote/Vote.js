import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const Vote = ({ children, onClick, type, value, color }) => {
  const marginVoteButton = {
    margin: 6
  };
  return (
    (/-annotation/i).test(type) ?
    <FloatingActionButton
      style={marginVoteButton}
      secondary={(value === "-1") ? false : true}
      onTouchTap={e => {
           e.preventDefault()
           onClick()
         }}
    >
      <span>
        {children}
      </span>
    </FloatingActionButton>
    :
    <RaisedButton
      label={children}
      buttonStyle={{
        backgroundColor: color
      }}
      style={{margin: 12, height: 80, width: 100}}
      labelStyle={{fontSize: 16, height: 28}}
      onTouchTap={e => {
           e.preventDefault()
           onClick()
         }}
    />
  );
}

Vote.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Vote
