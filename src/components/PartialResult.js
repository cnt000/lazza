import React from 'react';
import { connect } from 'react-redux';

const PartialResult = ({ votes, result }) => {
  return (
    <div className="home-votes">
      <ul>
        {votes.map(p => <li key={p.id+'_'+p.time}>{p.time + '-> ' + p.value}</li>)}
      </ul>
      <span>
        {result}
      </span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  votes: state.judging.votes.filter(elm => ownProps.type === elm.id),
  result: state.judging.votes.reduce((prevVal, elm) => {
    return (ownProps.type === elm.id) ? prevVal+parseFloat(elm.value): prevVal;
  }, 0.0).toFixed(1)
})

export default connect(
  mapStateToProps
)(PartialResult)
