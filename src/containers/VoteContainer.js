import { connect } from 'react-redux'
import { vote } from '../actions'
import Vote from '../components/Vote'

const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.type,
      value: ownProps.weight
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(vote(ownProps.type, ownProps.weight, 0))
    }
  }
}

const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote)

export default VoteContainer
