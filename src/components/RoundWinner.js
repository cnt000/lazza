import React from 'react'
import { connect } from 'react-redux'
import { orange500, green500 } from 'material-ui/styles/colors'

const RoundWinner = ({ winnerTeam,teamNameA, teamNameB }) => {
  let styles = {
    backgroundColor: (winnerTeam==='A') ? green500 : orange500
  };

  return (
    <span style={styles}>
      {(winnerTeam !== '' && winnerTeam === 'A') ? `Win Team ${winnerTeam} (${teamNameA.value})`: ``}
      {(winnerTeam !== '' && winnerTeam === 'B') ? `Win Team ${winnerTeam} (${teamNameA.value})`: ``}
    </span>
  )
}

const mapStateToProps = (state, ownProps) => ({
  winnerTeam: state.votes.filter(obj => (obj.id === ownProps.type)).reduce((total, vote) => {
    return vote.value;
  }, ""),
  teamNameA: state.fields.find(obj => (obj.id === `team-name-A`)) || {value: '-'},
  teamNameB: state.fields.find(obj => (obj.id === `team-name-B`)) || {value: '-'}
})

export default connect(
  mapStateToProps
)(RoundWinner)
