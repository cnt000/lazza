import { connect } from 'react-redux'
import { entryField } from '../actions'
import GameType from '../components/GameType'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.type,
    field: state.fields.find((obj) => { return obj.id === ownProps.type })
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
