import React, { PropTypes } from 'react'
import './VoteRow.css'

const VoteRow = ({ children, type }) => (
  <div type={type} className="vote-row">{children}</div>
)

VoteRow.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
}

export default VoteRow
