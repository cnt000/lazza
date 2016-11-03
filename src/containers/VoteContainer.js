import { connect } from 'react-redux'
import { incrementVote } from '../index'
import Vote from '../components/Vote'

const mapStateToProps = (state, ownProps) => {
  return {
    type: ownProps.type,
    weight: ownProps.weight,
    oneshot: ownProps.oneshot
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(incrementVote(ownProps.type))
    }
  }
}

const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote)

export default VoteContainer
