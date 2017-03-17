import { connect } from 'react-redux'
import React, { PropTypes } from 'react'
import { entryField } from '../actions'
import Checkbox from 'material-ui/Checkbox'

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  },
};

const PlayCheck = ({ children, field = {}, onChange}) => {
  return (
    <span style={styles.checkbox}>
      <Checkbox
        label="Play"
        style={styles.checkbox}
        defaultChecked={field.value}
        onChange={e => {
          onChange(e.target.checked)
        }}
      />
    </span>
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
