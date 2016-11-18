import React, { PropTypes } from 'react'

const VoteRow = ({ children, type }) => (
  <div type={type}>{children}</div>
)

VoteRow.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
}

export default VoteRow
