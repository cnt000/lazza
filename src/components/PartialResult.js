import React from 'react';
import { connect } from 'react-redux';
import { removeVote } from '../actions';
import './PartialResult.css';


const PartialResult = ({ votes, result, onClick }) => {
  return (
    <div className="home-votes">
      <ul>
        {votes.map(p => <li key={p.id+'_'+p.time+'_'+p.value}>
            {p.time + '-> ' + p.value}
            <span onClick={e => {
               e.preventDefault()
               onClick({
                 type: p.id,
                 weight: p.value,
                 time: p.time
                })
             }}> X </span>
           </li>)}
      </ul>
      <span className="total">Total: {result.value.toFixed(1)} - Votes: {result.time}</span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  votes: state.judging.votes.filter(elm => ownProps.type === elm.id),
  result: state.judging.results[ownProps.type] || { value: 0.0, time: 0}
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (obj) => {
      dispatch(removeVote(obj.type, obj.weight, obj.time))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartialResult)
