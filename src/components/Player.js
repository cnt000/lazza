import React from 'react';
import { connect } from 'react-redux';

const Player = ({ fields }) => {
  return (
    <div>
        {fields.map(p => <input type="text" data-id={p.id} />)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  fields: state.judging.fields.filter(elm => ownProps.type === elm.id),
})

export default connect(
  mapStateToProps
)(Player)
