import { connect } from 'react-redux'
import React from 'react'
import PlayCheckContainer from '../containers/PlayCheckContainer'

const Play = ({ id, teamName, teams}) => {
  let teamNameCheck = (teamName) ? teamName.value : "";
  return (
    <div>
      {teams.map(team =>
        (team.name === teamNameCheck)
          ? team.players.map((player, index) => <div>
              {player} <PlayCheckContainer type={`${id}${index}`} playerName={player} />
            </div>)
          : ""
      )}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.type,
    teamName: state.fields.find((obj) => { return obj.id === ownProps.teamKey }),
    teams: state.teams
  }
}

const PlayContainer = connect(
  mapStateToProps
)(Play)

export default PlayContainer
