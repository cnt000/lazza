import { connect } from 'react-redux'
import { vote } from '../actions'
import FinalJudging from '../components/FinalJudging'

const mapStateToProps = (state, ownProps) => {
  return {
    teamLetter: ownProps.teamLetter,
    votes: state.votes
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e, value, type) => {
      dispatch(vote(`${type}-team-${ownProps.teamLetter}`, value, true))
    }
  }
}

const FinalJudgingContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FinalJudging)

export default FinalJudgingContainer
