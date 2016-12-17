import React from 'react';
import { connect } from 'react-redux';

const Total = ({ result, type }) => {
  return (
    <div className="total">
      <span>
        {result.value.toFixed(2)} ({result.time})
      </span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  result: state.judging.results[ownProps.type] || { value: 0.0, time: 0},
  type: ownProps.type
})

export default connect(
  mapStateToProps
)(Total)
