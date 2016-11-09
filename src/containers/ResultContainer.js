import { connect } from 'react-redux'
import { loadResult } from '../actions'
import Result from '../components/Result'

const mapStateToProps = (state, ownProps) => {
    var sum = state.judging.votes.reduce((prevVal, elem) => {
        return (elem.id === ownProps.type) ?
        parseFloat(prevVal,10) + parseFloat(elem.value,10) :
        prevVal;
    }, 0.0);
  return {
      id: ownProps.type,
      value: sum
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result)

export default ResultContainer
