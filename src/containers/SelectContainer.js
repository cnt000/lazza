import { connect } from 'react-redux'
import { entryField, loadTeams } from '../actions'
import SelectTeam from '../components/SelectTeam'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.type,
    label: ownProps.label,
    teams: state.teams || {},
    field: state.fields.find((obj) => { return obj.id === ownProps.type }),
    onLoad: ownProps.onLoad
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(entryField(ownProps.type, value))
    },
    loadTeams: (value) => {
      dispatch(loadTeams(value))
    }
  }
}

const SelectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectTeam)

export default SelectContainer
