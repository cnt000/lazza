import React from 'react';
import { connect } from 'react-redux';

const WinnerBadge = ({ resultA, resultB }) => {
  return (
    <div className="total">
      Total Team A: {resultA.toFixed(2)}
      <br/>
      Total Team B: {resultB.toFixed(2)}
      <h1>WINNER IS TEAM {(resultA > resultB) ? 'A' : 'B'}</h1>
    </div>
  )
}

//TODO
const mapStateToProps = (state, ownProps) => ({
  resultA: state.results.totalA || 0.0,
  resultB: state.results.totalB || 0.0
})

export default connect(
  mapStateToProps
)(WinnerBadge)
