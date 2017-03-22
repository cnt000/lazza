import { connect } from 'react-redux'
import { entryField } from '../actions'
import GameType from '../components/GameType'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.type,
    label: ownProps.label,
    field: state.fields.find((obj) => { return obj.id === ownProps.type }),
    gameType: state.gameType
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(entryField(ownProps.type, value))
    }
  }
}

const GameTypeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameType)

export default GameTypeContainer
