import React from 'react'
import { connect } from 'react-redux'
import { orange500, green500 } from 'material-ui/styles/colors'

const RoundWinner = ({ winnerTeam}) => {
  let styles = {
    backgroundColor: (winnerTeam==='A') ? green500 : orange500
  };

  return (
    <span style={styles}>
      {(winnerTeam !== '') ? `Win Team ${winnerTeam}`: ``}
    </span>
  )
}
// sul container padre
const mapStateToProps = (state, ownProps) => ({
  winnerTeam: state.votes.filter(obj => (obj.id === ownProps.type)).reduce((total, vote) => {
    return vote.value;
  }, "")
})

export default connect(
  mapStateToProps
)(RoundWinner)
