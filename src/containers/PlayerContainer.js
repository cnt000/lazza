import { connect } from 'react-redux'
import { entryPlay } from '../actions'
import Play from '../components/Play'

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.team,
    teamName: state.fields.find((obj) => { return obj.id === ownProps.team })
    teams: state.teams
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
      dispatch(entryPlay(ownProps.type, value))
    }
  }
}

const PlayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Play)

export default PlayContainer
