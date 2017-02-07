import React from 'react';
import { connect } from 'react-redux';

const Total = ({ result, time }) => {
  return (
    <div className="total">
      <span>
        {result} {(time>1) ? `(${time})` : ""}
      </span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  result: state.votes.filter(obj => (obj.id === ownProps.type)).reduce((total, vote) => {
    return total + vote.value;
  }, parseFloat(ownProps.startingPoint)),
  time: state.votes.filter(obj => (obj.id === ownProps.type)).length
})

export default connect(
  mapStateToProps
)(Total)
