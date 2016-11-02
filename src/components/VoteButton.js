import React, { PropTypes } from 'react'
import { incrementVote } from '../index'

const VoteButton = ({ active, children, onClick }) => (
  <button onClick={e => {
         e.preventDefault()
         alert({children})
       }}>
    {children}
  </button>
)

const mapStateToProps = (state, ownProps) => ({
  name: ownProps.name
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(incrementVote(ownProps.name))
  }
})

export default VoteButton
