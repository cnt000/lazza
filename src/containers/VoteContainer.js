import { connect } from 'react-redux'
import { vote } from '../actions'
import Vote from '../components/Vote/Vote'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.type,
    value: ownProps.weight,
    color: ownProps.color
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(vote(ownProps.type, ownProps.weight, false))
    }
  }
}

const VoteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Vote)

export default VoteContainer
