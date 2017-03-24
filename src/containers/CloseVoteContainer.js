import { connect } from 'react-redux'
import { promiseSaveResult, resetAll } from '../actions'
import CloseVote from '../components/CloseVote'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    isSaving: state.finalResponse
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickSendVote: (state) => {
      dispatch(promiseSaveResult(state))
    },
    onClickResetData: () => {
      dispatch(resetAll())
    }
  }
}

const CloseVoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CloseVote)

export default CloseVoteContainer
