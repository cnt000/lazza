import React from 'react'
import { connect } from 'react-redux'
import FieldContainer from '../containers/FieldContainer';
import PlayContainer from '../containers/PlayContainer';
import GameTypeContainer from '../containers/GameTypeContainer';
import SelectContainer from '../containers/SelectContainer';

const Registration = () => {
  return (
    <div>
      <div>
        <div id="JudgeName">
          <span>Judge</span>
          <FieldContainer type="judge" />
        </div>
        <div id="gameType">
          Type of game
          <GameTypeContainer type="gametype" />
        </div>
        <div className="playersTeam">
          <div className="playersTeamTitle">Team A name:</div>
          <SelectContainer type="team-name-A" />
        </div>
        <div className="playersTeam">
          <div className="playersTeamTitle">Team B name:</div>
          <SelectContainer type="team-name-B" />
        </div>
        <br/>
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
