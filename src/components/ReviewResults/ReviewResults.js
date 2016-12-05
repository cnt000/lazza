import React from 'react';
import { connect } from 'react-redux';
import { removeVote } from '../../actions';
import Table from 'react-bootstrap/lib/Table';
import './ReviewResults.css';


const ReviewResults = ({ votes, result, onClick, type }) => {
  let isAnnotation = (/-annotation/i).test(type) ? true : false;

  if(votes.length === 0) {
    return (
      <div>No votes yet</div>
    )
  }

  if(isAnnotation) {
    return (
      <div className="annotation-result">
        <span className="total">Annotations: {result.time}</span>
        <ul>
          {votes.map(p => <li key={p.id+'_'+p.time+'_'+p.value}>
                          {(parseInt(p.value, 10) === 1) ? '+' : '-'}
                         </li>)}
        </ul>
      </div>
    )
  }

  return (
    <div>
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Value</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {votes.map(p => <tr key={p.id+'_'+p.time+'_'+p.value}>
              <td>{p.time}</td>
              <td>{p.value}</td>
              <td>
                <span onClick={e => {
                 e.preventDefault()
                 onClick({
                   type: p.id,
                   weight: p.value,
                   time: p.time
                  })
               }}> X </span>
             </td>
           </tr>)}
        </tbody>
      </Table>
      <span className="total">Total: {result.value.toFixed(1)} - Votes: {result.time}</span>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  votes: state.judging.votes.filter(elm => ownProps.type === elm.id),
  result: state.judging.results[ownProps.type] || { value: 0.0, time: 0},
  type: ownProps.type
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
)(ReviewResults)
