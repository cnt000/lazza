import { connect } from 'react-redux'
import { promiseSaveResult } from '../actions'
import SendResponse from '../components/SendResponse'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state,
    isSaving: state.judging.finalResponse
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (state) => {
      dispatch(promiseSaveResult(state))
    }
  }
}

const SendResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendResponse)

export default SendResponseContainer
