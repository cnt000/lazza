import React, { Component, PropTypes } from 'react'

class SelectPlayer extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.onLoad('test');
  }

  render() {
    return (
      <div>
        <select
          className="form-control"
          type="type-of-game"
          defaultValue={(this.props.field) ? this.props.field.value : ""}
          onChange={e => {
             e.preventDefault()
             this.props.onChange(e.target.value)
         }}
          >
          <option value="" >Select...</option>
          {this.props.players.length > 0 && this.props.players.map(option =>
            <option value={option.name} key={option.name}>
              {option.name}
            </option>)
          }
        </select>
      </div>
    )
  }
}

export default SelectPlayer
