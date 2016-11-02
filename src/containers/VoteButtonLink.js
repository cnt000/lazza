import { connect } from 'react-redux'
import { incrementVote } from '../index'
import VoteButton from '../components/VoteButton'

// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(incrementVote({ name: ownProps.name, weight: ownProps.weight }))
    }
  }
}

const VoteButtonLink = connect(
  // mapStateToProps,
  mapDispatchToProps
)(VoteButton)

export default VoteButtonLink
