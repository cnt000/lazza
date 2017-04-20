import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Total from './Total'
import WinnerBadge from './WinnerBadge'
import RoundWinner from './RoundWinner'
import ReviewResults from './ReviewResults/ReviewResults'

const styles = {
  container: {
    margin: '10px'
  },
  columns: {
    display: 'flex',
  },
  column: {
    width: '48%',
    textAlign: 'center'
  },
  title: {
    fontSize: '24px',
    marginBottom:'12px'
  },
  confirm: {
    fontSize: '32px',
    margin:'12px auto',
    textAlign: 'center'
  },
  buttons: {
    margin: '20px auto',
    textAlign: 'center'
  }
};

const CloseVote = ({ children, 
                    finalResponse, 
                    isBattle, 
                    onClickSendVote, 
                    onClickResetData, 
                    onClickConfirmSaved, 
                    state}) => {

  if(finalResponse && finalResponse.saved) {
    return (
      <div style={styles.container}>
        <div style={styles.confirm}>
          I dati sono salvati correttamente sul server, <br/>clicca ok per giudicare il prossima match
        </div>
        <div style={styles.buttons}>
          <RaisedButton
            label={`Ok`}
            onTouchTap={e => {
                e.preventDefault()
                onClickConfirmSaved()
              }}
          />
        </div>
      </div>
    )
  }
  // to state
  let battleButtons = [
    "Round 1",
    "Round 2",
    "Round 3",
    "Round 4",
    "Round 5"
  ]

  if(isBattle.length > 0) {
    return (
      <div style={styles.container}>
        <div style={styles.buttons}>
          <WinnerBadge type="battle" />
          {battleButtons.map(round => <div key={round} style={styles.title}>{`${round}: `} <RoundWinner type={round} /></div>)}
        </div>
        <div style={styles.buttons}>
          <RaisedButton
            label={`Send Response`}
            secondary={true}
            buttonStyle={{width: '80vw'}}
            onTouchTap={e => {
                e.preventDefault()
                if(!confirm('Are you sure? It\'s FINAL decision')) return false
                onClickSendVote(state)
              }}
          />
        </div>
        <div style={styles.buttons}>
          <RaisedButton
            label={`Reset All`}
            onTouchTap={e => {
                e.preventDefault()
                if(!confirm('Are you sure?')) return false
                onClickResetData()
              }}
          />
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <WinnerBadge type="co-op" />
      <br/>
      <br/>
      <div style={styles.columns}>
        <div style={styles.column}>
          <h3 style={styles.title}>Team A results:</h3>
          Teamwork A:
          <Total type="teamwork-team-A" startingPoint="0.0" />
          <br/>
          Music A:
          <Total type="music-team-A" startingPoint="0.0" />
          <br/>
          Flow A:
          <Total type="flow-team-A" startingPoint="0.0" />
          <br/>
          Variety A:
          <Total type="variety-team-A" startingPoint="0.0" />
          <br/>
          General Impression A:
          <Total type="general-impression-team-A" startingPoint="0.0" />
          <br/>
          Difficulty A:
          <Total type="difficulty-team-A" startingPoint="0.0" />
          <br/>
          Execution A:
          <Total type="execution-team-A" startingPoint="0.0" />
          <br/>
          <br/>
          <br/>
          Review Difficulty and Execution:
          <br/>
          <ReviewResults label="Difficulty" type="difficulty-team-A" />
          <ReviewResults label="Execution" type="execution-team-A" />
        </div>
        <div style={styles.column}>
          <h3 style={styles.title}>Team B results:</h3>
          Teamwork B:
          <Total type="teamwork-team-B" startingPoint="0.0" />
          <br/>
          Music B:
          <Total type="music-team-B" startingPoint="0.0" />
          <br/>
          Flow B:
          <Total type="flow-team-B" startingPoint="0.0" />
          <br/>
          Variety B:
          <Total type="variety-team-B" startingPoint="0.0" />
          <br/>
          General Impression B:
          <Total type="general-impression-team-B" startingPoint="0.0" />
          <br/>
          Difficulty B:
          <Total type="difficulty-team-B" startingPoint="0.0" />
          <br/>
          Execution B:
          <Total type="execution-team-B" startingPoint="0.0" />
          <br/>
          <br/>
          <br/>
          Review Difficulty and Execution:
          <ReviewResults label="Difficulty" type="difficulty-team-B" />
          <ReviewResults label="Execution" type="execution-team-B" />
        </div>
      </div>
      <div style={styles.buttons}>
        <RaisedButton
          label={`Send Response`}
          secondary={true}
          buttonStyle={{width: '80vw'}}
          onTouchTap={e => {
               e.preventDefault()
               if(!confirm('Are you sure? It\'s FINAL decision')) return false
               onClickSendVote(state)
             }}
        />
      </div>
      <div style={styles.buttons}>
        <RaisedButton
          label={`Reset All`}
          onTouchTap={e => {
              e.preventDefault()
              if(!confirm('Are you sure?')) return false
              onClickResetData()
            }}
        />
      </div>
    </div>
  );
};

CloseVote.propTypes = {
  onClickSendVote: PropTypes.func.isRequired, 
  onClickResetData: PropTypes.func.isRequired,
  onClickConfirmSaved: PropTypes.func.isRequired 
}

export default CloseVote
