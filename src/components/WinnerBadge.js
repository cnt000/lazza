import React from 'react'
import { connect } from 'react-redux'
import {calculateTotal} from '../actions'

const WinnerBadge = ({ resultsA, resultsB }) => {
  return (
    <div className="total">
      Total Team A: {resultsA.toFixed(2)}
      <br/>
      Total Team B: {resultsB.toFixed(2)}
      <h1>WINNER IS TEAM {(resultsA > resultsB) ? 'A' : 'B'}</h1>
    </div>
  )
};

const mapStateToProps = (state, ownProps) => ({
  resultsA: calculateTotal({ votes: state.votes, team: 'team-A' }),
  resultsB: calculateTotal({ votes: state.votes, team: 'team-B' })
});

export default connect(
  mapStateToProps
)(WinnerBadge)
