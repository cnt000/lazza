import React from 'react';
import { connect } from 'react-redux';

const WinnerBadge = ({ resultsA, resultsB }) => {
  return (
    <div className="total">
      Total Team A: {resultsA}
      <br/>
      Total Team B: {resultsB}
      <h1>WINNER IS TEAM {(resultsA > resultsB) ? 'A' : 'B'}</h1>
    </div>
  )
}
// TODO come stacco tutti i risultati per il calcolo diverso? execution: 5 difficulty 10
const mapStateToProps = (state, ownProps) => ({
  resultsA: state.votes.filter(obj => (/-A$/.test(obj.id))).reduce((total, vote) => {
    return total + vote.value;
  }, 0.0),
  resultsB: state.votes.filter(obj => (/-B$/.test(obj.id))).reduce((total, vote) => {
    return total + vote.value;
  }, 0.0)
})

export default connect(
  mapStateToProps
)(WinnerBadge)
