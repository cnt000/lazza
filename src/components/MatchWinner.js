import React from 'react'
import { connect } from 'react-redux'
import { calculateTotal } from '../actions'

let styles = {
  results: {
    fontSize: '24px',
    display: 'flex'
  },
  column: {
    width: '49%',
    textAlign: 'center'
  },
  winner: {
    margin: '20px auto',
    textAlign: 'center',
    fontSize: '36px'
  }
}

const MatchWinner = ({ resultsA, 
                        resultsB, 
                        teamNameA, 
                        teamNameB, 
                        type, 
                        battleRoundTeamA, 
                        battleRoundTeamB,
                        hasVotes }) => {

  if(!hasVotes) {
    return (
      <div>
        <div style={styles.winner}>
          NO VOTES YET
        </div>
      </div>
    )
  }

  if(type === 'battle') {
    return (
      <div>
        <div style={styles.winner}>
          WINNER IS TEAM {(battleRoundTeamA > battleRoundTeamB) ? ` A (${teamNameA.value})` : ` B (${teamNameA.value})`}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div style={styles.winner}>
        WINNER IS TEAM {(resultsA > resultsB) ? `A (${teamNameA.value})` : `B ${teamNameB.value}`}
      </div>
      <div style={styles.results}>
        <div style={styles.column}>
          Total Team A ({teamNameA.value}): {resultsA.toFixed(2)}
        </div>
        <div style={styles.column}>
          Total Team B ({teamNameB.value}): {resultsB.toFixed(2)}
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  resultsA: calculateTotal({ votes: state.votes, team: 'team-A' }),
  resultsB: calculateTotal({ votes: state.votes, team: 'team-B' }),
  teamNameA: state.fields.find(obj => (obj.id === `team-name-A`)) || {value: '-'},
  teamNameB: state.fields.find(obj => (obj.id === `team-name-B`)) || {value: '-'},
  battleRoundTeamA: state.votes.filter(obj => (/^Round/.test(obj.id) && obj.value === 'A')),
  battleRoundTeamB: state.votes.filter(obj => (/^Round/.test(obj.id) && obj.value === 'B')),
  hasVotes: state.votes.length > 0
});

export default connect(
  mapStateToProps
)(MatchWinner)
