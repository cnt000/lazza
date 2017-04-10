import React from 'react'
import { connect } from 'react-redux'

const RoundWinner = ({ winnerTeam}) => {
  return (
    <span>
      {(winnerTeam !== "") ? `Win Team ${winnerTeam}`: ``}
    </span>
  )
}

const mapStateToProps = (state, ownProps) => ({
  winnerTeam: state.votes.filter(obj => (obj.id === ownProps.type)).reduce((total, vote) => {
    return vote.value;
  }, "")
})

export default connect(
  mapStateToProps
)(RoundWinner)
