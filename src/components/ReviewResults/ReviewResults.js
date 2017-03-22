import React from 'react'
import { connect } from 'react-redux'
import { removeVote } from '../../actions'
import Total from '../Total'
import Badge from 'material-ui/Badge'
import Table from 'react-bootstrap/lib/Table'
import 'bootstrap/dist/css/bootstrap.css'

const styles = {
  list: {
    listStyle: 'none'
  },
  annotationIcons: {
    display: 'inline',
    margin: 4
  },
  annotationsResults: {
    fontSize: '0.8em'
  }
};

const ReviewResults = ({ votes, plus, minus, onClick, type }) => {
  let isAnnotation = (/-annotation/i).test(type) ? true : false;

  if(votes.length === 0 && !isAnnotation) {
    return (
      <div>No votes yet</div>
    )
  }

  if(isAnnotation) {
    let plusC = votes.filter(obj => obj.value === 1).length;
    let minusC = votes.length - plusC;
    return (
      <div style={styles.annotationsResults}>
        <Badge
          badgeContent={minusC}
          primary={true}
          >-</Badge>
        <Badge
          badgeContent={plusC}
          secondary={true}
        >+</Badge>
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
      <Total type={type} startingPoint="0" />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  votes: state.votes.filter(elm => ownProps.type === elm.id),
  plus: 1,
  minus: 2,
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
