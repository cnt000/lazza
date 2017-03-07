import React from 'react'
import { connect } from 'react-redux'

const WinnerBadge = ({ resultsA, resultsB }) => {
  return (
    <div className="total">
      Total Team A: {resultsA.toFixed(2)}
      <br/>
      Total Team B: {resultsB.toFixed(2)}
      <h1>WINNER IS TEAM {(resultsA > resultsB) ? 'A' : 'B'}</h1>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  resultsA: calculateTotal({ votes: state.votes, team: 'team-A' }),
  resultsB: calculateTotal({ votes: state.votes, team: 'team-B' })
})


function calculateTotal({ votes, team }) {
  let difficultyResult = calculatePartial({ votes, team, startingPoint: 5.0, type: 'difficulty' });
  let executionResult = calculatePartial({ votes, team, startingPoint: 10.0, type: 'execution' });
  let teamworkResult = calculatePartial({ votes, team, startingPoint: 0, type: 'teamwork' });
  let musicResult = calculatePartial({ votes, team, startingPoint: 0, type: 'music' });
  let flowResult = calculatePartial({ votes, team, startingPoint: 0, type: 'flow' });
  let varietyResult = calculatePartial({ votes, team, startingPoint: 0, type: 'variety' });
  let generalImpressionResult = calculatePartial({ votes, team, startingPoint: 0, type: 'general-impression' });

  return difficultyResult +
          executionResult +
            teamworkResult +
              musicResult +
                flowResult +
                  varietyResult +
                  generalImpressionResult;
}

function calculatePartial({ votes, team, startingPoint, type }) {
  let regex = new RegExp(`^${type}-${team}$`,'g');
  return votes.filter(obj => (regex.test(obj.id))).reduce((total, vote) => {
    return total + vote.value;
  }, parseFloat(startingPoint))
}

export default connect(
  mapStateToProps
)(WinnerBadge)
