import { connect } from 'react-redux'
import { loadResult } from '../actions'
import Result from '../components/Result'

const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.type,
      value: state.judging.votes.reduce((obj, prev) => {
        return (obj.id === ownProps.type) ? obj.value + prev : prev;
      }, 0)
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
