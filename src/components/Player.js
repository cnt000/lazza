import React from 'react';
import { connect } from 'react-redux';

const Player = ({ fields }) => {
  return (
    <div>
        {fields.map(p => <input key={p.id} defaultValue={p.value} type="text" data-id={p.id} />)}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  fields: state.fields.filter(elm => ownProps.type === elm.id),
})

export default connect(
  mapStateToProps
)(Player)
