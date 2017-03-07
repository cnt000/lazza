import React from 'react'
import { connect } from 'react-redux'
import { resetAll } from '../actions'

const ResetAll = ({ isResetting, children, onClick }) => {
  return (
    <div className="reset-all">
      <button className="btn btn-black btn-lg btn-block" onClick={e => {
             e.preventDefault()
             if(!confirm('Are you sure? It\'s FINAL decision, ALL DATA LOST')) return false
             onClick("all")
           }}>
        {children}
      </button>
    </div>
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
