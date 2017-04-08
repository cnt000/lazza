import React, { PropTypes } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import RoundWinner from './RoundWinner'
import Divider from 'material-ui/Divider'
import { orange500, blue500 } from 'material-ui/styles/colors'

const Battle = ({ onClick }) => {

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

  let battleButtons = [
    "Round 1",
    "Round 2",
    "Round 3",
    "Round 4",
    "Round 5"
  ]

  return (
    <div style={styles.container}>
      <div style={styles.vote}>
        {
          battleButtons.map((button) => 
          <div key={button}>
            <div style={styles.header}>{button} -> <RoundWinner type={button} /></div>
              <div style={styles.annotation}>
              <RaisedButton
                key={`${button}-A`}
                label={`WIN A`}
                buttonStyle={{
                  backgroundColor: orange500
                }}
                style={styles.raisedButton}
                labelStyle={styles.raisedButtonLabel}
                onTouchTap={e => {
                    e.preventDefault()
                    onClick(`${button}`, `A`)
                  }}
              />
              <RaisedButton
                key={`${button}-B`}
                label={`WIN B`}
                buttonStyle={{
                  backgroundColor: blue500
                }}
                style={styles.raisedButton}
                labelStyle={styles.raisedButtonLabel}
                onTouchTap={e => {
                    e.preventDefault()
                    onClick(`${button}`, `B`)
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
  onClick: PropTypes.func.isRequired
}

export default Battle
