import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { entryField } from '../actions'

const PlayCheck = ({ children, field = {}, onChange}) => {
    return (
      <span>
      <input
      type="checkbox"
      defaultChecked={field.value}
      onChange={e => {
         onChange(e.target.checked)
      }}
      /> Play</span>
  );
};

PlayCheck.propTypes = {
  onChange: PropTypes.func.isRequired
}

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
