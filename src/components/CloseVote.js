import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import CoopRecap from './CoopRecap'
import MatchWinner from './MatchWinner'
import RoundWinner from './RoundWinner'


const styles = {
  container: {
    margin: '10px'
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
                    state,
                    battleRounds,
                    hasVotes
                  }) => {

  const resetDebugBtn = <RaisedButton
          label={`Reset All`}
          onTouchTap={e => {
              e.preventDefault()
              if(!confirm('Are you sure?')) return false
              onClickResetData()
            }}
        />

  if(!hasVotes) {
    return <div style={styles.container}>
            <div style={styles.buttons}>
              <MatchWinner type="battle" />
            </div>
          </div>
  }

  if(finalResponse && finalResponse.saved) {
    return (
      <div style={styles.container}>
        <div style={styles.confirm}>
          <p>I dati sono salvati correttamente sul server, <br/>clicca ok per giudicare il prossimo match</p>
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

  if(isBattle.length > 0) {
    return (
      <div style={styles.container}>
        <div style={styles.buttons}>
          <MatchWinner type="battle" />
          {battleRounds.map(round => <div key={round.name} style={styles.title}>{`${round.name}: `} <RoundWinner type={round.name} /></div>)}
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
          { resetDebugBtn }
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      <MatchWinner type="co-op" />
      <br/>
      <br/>
      <CoopRecap />
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
        { resetDebugBtn }
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
