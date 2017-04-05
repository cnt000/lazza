import { connect } from 'react-redux'
import { vote } from '../actions'
import LiveJudging from '../components/LiveJudging'

const mapStateToProps = (state, ownProps) => {
  return {
    teamLetter: ownProps.teamLetter,
    votes: state.votes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (type, value) => {
      navigator.vibrate(300);
      dispatch(vote(type, value, false))
    }
  }
}

const LiveJudgingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveJudging)

export default LiveJudgingContainer
