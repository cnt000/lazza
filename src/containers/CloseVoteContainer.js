import { connect } from 'react-redux'
import { promiseSaveResult, resetAll, confirmSaved } from '../actions'
import CloseVote from '../components/CloseVote'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    finalResponse: state.finalResponse,
    isBattle: state.fields.filter((obj)=>(obj.id==="gametype" && obj.value==='battle')),
    battleRounds: state.battleRounds
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickSendVote: (state) => {
      dispatch(promiseSaveResult(state))
    },
    onClickResetData: () => {
      dispatch(resetAll())
    },
    onClickConfirmSaved: () => {
       dispatch(confirmSaved())
    }
  }
}

const CloseVoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CloseVote)

export default CloseVoteContainer
