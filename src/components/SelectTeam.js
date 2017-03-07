import React, { Component, PropTypes } from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class SelectTeam extends Component {

  static propTypes = {
    loadTeams: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.loadTeams('test');
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText={this.props.label}
          value={(this.props.field) ? this.props.field.value : ""}
          autoWidth={true}
          onChange={e => {
             e.preventDefault()
             this.props.onChange(e.target.textContent)
         }}
        >
          <MenuItem value={null} primaryText="" />
          {this.props.teams.length > 0 && this.props.teams.map(option =>
            <MenuItem value={option.name} key={option.name} primaryText={option.name} />
          )}
        </SelectField>
      </div>
    )
  }
}

export default SelectTeam
