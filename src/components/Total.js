import React from 'react';
import { connect } from 'react-redux';

const Total = ({ result }) => {
  return (
    <div className="total">
      <span>
        {result.value.toFixed(1)} - {result.time}
      </span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  result: state.judging.results[ownProps.type] || { value: 0.0, time: 0}
})

export default connect(
  mapStateToProps
)(Total)
