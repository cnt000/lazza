import React from 'react'
import { connect } from 'react-redux'
import FieldContainer from '../containers/FieldContainer'
import PlayContainer from '../containers/PlayContainer'
import GameTypeContainer from '../containers/GameTypeContainer'
import SelectContainer from '../containers/SelectContainer'
import Divider from 'material-ui/Divider'

const styles = {
  wrapper: {
    margin: '0 10px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  boxes: {

  }
}

const Registration = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.boxes}>
        <div id="JudgeName">
          <FieldContainer type="judge" label="Judge" />
        </div>
        <div id="gameType">
          <GameTypeContainer type="gametype" label="Type of game" />
        </div>
      </div>
      <div style={styles.boxes}>
        <div className="playersTeam">
          <SelectContainer type="team-name-A" label="Team A" />
          <PlayContainer type="player-play-A" teamKey="team-name-A" />
        </div>
      </div>
      <div style={styles.boxes}>
        <div className="playersTeam">
          <SelectContainer type="team-name-B" label="Team B" />
          <PlayContainer type="player-play-B" teamKey="team-name-B" />
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
