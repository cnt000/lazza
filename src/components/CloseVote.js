import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Total from './Total'
import WinnerBadge from './WinnerBadge'
import ReviewResults from './ReviewResults/ReviewResults'

const CloseVote = ({ children, onClickSendVote, onClickResetData, state}) => {

  const styles = {
    container: {
      margin: '10px',
      height: 'calc(100vh - 48px)'
    },
    column: {
      display: 'flex'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.column}>
        <div>
          <h3>Team A Final Review:</h3>
          <div>Execution:</div>
          <ReviewResults type="execution-team-A" />
          <div>Difficulty:</div>
          <ReviewResults type="difficulty-team-A" />
          teamwork A:
          <Total type="teamwork-team-A" startingPoint="0.0" />
          music A:
          <Total type="music-team-A" startingPoint="0.0" />
          flow A:
          <Total type="flow-team-A" startingPoint="0.0" />
          variety A:
          <Total type="variety-team-A" startingPoint="0.0" />
          general impression A:
          <Total type="general-impression-team-A" startingPoint="0.0" />
        </div>
        <div>
          <h3>Team B Final Review:</h3>
          <div>Execution:</div>
          <ReviewResults type="execution-team-B" />
          <div>Difficulty:</div>
          <ReviewResults type="difficulty-team-B" />
          teamwork B:
          <Total type="teamwork-team-B" startingPoint="0.0" />
          music B:
          <Total type="music-team-B" startingPoint="0.0" />
          flow B:
          <Total type="flow-team-B" startingPoint="0.0" />
          variety B:
          <Total type="variety-team-B" startingPoint="0.0" />
          general impression B:
          <Total type="general-impression-team-B" startingPoint="0.0" />
        </div>
      </div>
      <div>
        <WinnerBadge />
        <RaisedButton
          label={`Send Response`}
          secondary={true}
          buttonStyle={{width: '60vw'}}
          onTouchTap={e => {
               e.preventDefault()
               if(!confirm('Are you sure? It\'s FINAL decision')) return false
               onClickSendVote(state)
             }}
        />
        <RaisedButton
          label={`Reset All Data`}
          buttonStyle={{width: '60vw'}}
          onTouchTap={e => {
               e.preventDefault()
               if(!confirm('Are you sure? It\'s FINAL decision')) return false
               onClickResetData()
             }}
        />
      </div>
    </div>
  );
};

  export default CloseVote
