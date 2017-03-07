import React from 'react'
import { connect } from 'react-redux'
import FieldContainer from '../containers/FieldContainer'
import PlayContainer from '../containers/PlayContainer'
import GameTypeContainer from '../containers/GameTypeContainer'
import SelectContainer from '../containers/SelectContainer'

const styles = {
  margin: 20
}

const Registration = () => {
  return (
    <div style={styles}>
      <div>
        <div id="JudgeName">
          <FieldContainer type="judge" label="Judge" />
        </div>
        <div id="gameType">
          <GameTypeContainer type="gametype" label="Type of game" />
        </div>
        <div className="playersTeam">
          <SelectContainer type="team-name-A" label="Team A" />
        </div>
        <div className="playersTeam">
          <SelectContainer type="team-name-B" label="Team B" />
        </div>
      </div>
      <div>
        <div className="playersTeam">
          <div className="playersTeamTitle">
            Players Team A:
            </div>
          <div className="playerTeamEntry">
            <PlayContainer type="player-play-A" teamKey="team-name-A" />
          </div>
        </div>
        <div className="playersTeam">
          <div className="playersTeamTitle">
          Team B:
          </div>
          <div className="playerTeamEntry">
            <PlayContainer type="player-play-B" teamKey="team-name-B" />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
  }
}

export default connect(
  mapStateToProps
)(Registration)
