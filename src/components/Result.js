import React, { PropTypes } from 'react'

const Result = ({ value }) => (
    <span>AAA {value.value}</span>
)

Result.propTypes = {
  id: PropTypes.string.isRequired
}

export default Result
