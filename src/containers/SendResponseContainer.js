import { connect } from 'react-redux'
import { savingFinalResp } from '../actions'
import SendResponse from '../components/SendResponse'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    isSaving: state.judging.finalResponse
  }
}
console.log(savingFinalResp);

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (state) => {
      dispatch(savingFinalResp(state))
    }
  }
}

const SendResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendResponse)

export default SendResponseContainer
