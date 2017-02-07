import { connect } from 'react-redux'
import { entryField } from '../actions'
import PlayCheck from '../components/PlayCheck'

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

const PlayCheckContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayCheck)

export default PlayCheckContainer
