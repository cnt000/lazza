import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import RoundWinner from './RoundWinner'
import Divider from 'material-ui/Divider'
import { orange500, green500 } from 'material-ui/styles/colors'

const Battle = ({ onClick, battleRounds }) => {

  const styles = {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'
    },
    annotation: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    vote: {
      padding: '10px'
    },
    raisedButton: {
      margin: 12, 
      height: 80, 
      width: 140
    },
    raisedButtonLabel: {
      fontSize: 16, 
      height: 28
    },
    header: {
      margin: 10,
      fontSize: '22px',
      display: 'flex',
      justifyContent: 'center'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.vote}>
        {
          battleRounds.map((round) => 
          <div key={round.name} className={round.voted && `disabled`}>
            <div style={styles.header}>{round.name} -> <RoundWinner type={round.name} /></div>
              <div style={styles.annotation}>
              <RaisedButton
                key={`${round.name}-A`}
                label={`WIN A`}
                buttonStyle={{
                  backgroundColor: green500
                }}
                style={styles.raisedButton}
                labelStyle={styles.raisedButtonLabel}
                onTouchTap={e => {
                    e.preventDefault()
                    onClick(`${round.name}`, `A`)
                  }}
              />
              <RaisedButton
                key={`${round.name}-B`}
                label={`WIN B`}
                buttonStyle={{
                  backgroundColor: orange500
                }}
                style={styles.raisedButton}
                labelStyle={styles.raisedButtonLabel}
                onTouchTap={e => {
                    e.preventDefault()
                    onClick(`${round.name}`, `B`)
                  }}
              />
            </div>
            <Divider />
          </div>
          )
        }
      </div>
    </div>
  );
};

Battle.propTypes = {
  onClick: PropTypes.func.isRequired,
  battleRounds: PropTypes.array.isRequired
}

export default Battle
