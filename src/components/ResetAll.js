import React from 'react'
import { connect } from 'react-redux'
import { resetAll } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'

const ResetAll = ({ isResetting, children, onClick }) => {
  return (
    <RaisedButton
      label={children}
      buttonStyle={{width: '60vw'}}
      onTouchTap={e => {
           e.preventDefault()
           if(!confirm('Are you sure? It\'s FINAL decision, ALL DATA LOST')) return false
           onClick("all")
         }}
    />
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    isResetting: true
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch(resetAll(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetAll)
