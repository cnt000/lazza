import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'

const VoteRow = ({ children, type }) => (
  <div type={type} className="vote-row">
    {children}
    <Divider />
  </div>
)

VoteRow.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired
}

export default VoteRow
