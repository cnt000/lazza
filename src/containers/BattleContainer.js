import { connect } from 'react-redux'
import { vote } from '../actions'
import Battle from '../components/Battle'

const mapStateToProps = (state, ownProps) => {
  return {
    votes: state.votes,
    battleRounds: state.battleRounds
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (type, value) => {
      navigator.vibrate(300);
      dispatch(vote(type, value, true))
    }
  }
}

const BattleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle)

export default BattleContainer
