import { connect } from 'react-redux'
import { entryField } from '../actions'
import Field from '../components/Field'

const mapStateToProps = (state, ownProps) => {
  return {
      id: ownProps.type
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (value) => {
        dispatch(entryField(ownProps.type, value))
    }
  }
}

const FieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Field)

export default FieldContainer
