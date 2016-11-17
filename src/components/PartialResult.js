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
  result: state.judging.results[ownProps.type]
})

export default connect(
  mapStateToProps
)(PartialResult)
