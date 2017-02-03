import { connect } from 'react-redux'
import { entryField, loadTeams } from '../actions'
import SelectPlayer from '../components/SelectPlayer'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.type,
    players: state.judging.players || {},
    field: state.judging.fields.find((obj) => { return obj.id === ownProps.type })
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(entryField(ownProps.type, value))
    },
    onLoad: (value) => {
      dispatch(loadTeams(value))
    }
  }
}

const SelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectPlayer)

export default SelectContainer
