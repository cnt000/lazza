import { connect } from 'react-redux'
import { sendFinalResponse } from '../actions'
import SendResponse from '../components/SendResponse'

const mapStateToProps = (state, ownProps) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (state) => {
      dispatch(sendFinalResponse(state))
    }
  }
}

const SendResponseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SendResponse)

export default SendResponseContainer
