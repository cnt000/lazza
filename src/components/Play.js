import React, { PropTypes } from 'react'
import PlayCheckContainer from '../containers/PlayCheckContainer'

const Play = ({ id, teamName, teams, onChange}) => {
  let teamNameCheck = (teamName) ? teamName.value : "";
  return (
    <div>
      {teams.map(team =>
        (team.name === teamNameCheck) ?
          team.players.map((player, index) => <div>
            {player} <PlayCheckContainer type={`${id}${index}`} />
          </div>)
          : ""
      )}
  </div>);

};

Play.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Play
