import React, { PropTypes } from 'react'
import Total from '../components/Total'
import ReviewResults from '../components/ReviewResults/ReviewResults'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import {red200, red400, green200, green300, green400, green500, green600} from 'material-ui/styles/colors'

const LiveJudging = ({ teamLetter, onClick }) => {

  const styles = {
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center'
    },
    annotation: {
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '16px'
    },
    vote: {
      padding: '10px'
    },
    raisedButton: {
      margin: 12, 
      height: 80, 
      width: 100
    },
    raisedButtonLabel: {
      fontSize: 16, 
      height: 28
    },
    separator: {
      height: '4vh'
    },
    header: {
      margin: 10,
      fontSize: '22px',
      display: 'flex',
      justifyContent: 'center'
    },
    paper: {
      padding: '4px'
    },
    weight: {
      display: 'none',
      fontSize: '12px',
      lineHeight: '1px'
    }
  };

  const difficultyButtons = [
    {
     color: green200,
     type: 'difficulty-team-',
      weight: '-0.5',
      label: 'BAD'
    },
    {
     color: green300,
     type: 'difficulty-team-',
      weight: '-0.25',
      label: 'NOTGOOD'
    },
    {
     color: green400,
     type: 'difficulty-team-',
      weight: '0',
      label: 'MEDIUM'
    },
    {
     color: green500,
     type: 'difficulty-team-',
      weight: '0.25',
      label: 'GOOD'
    },
    {
     color: green600,
     type: 'difficulty-team-',
      weight: '0.5',
      label: 'AMAZING'
    }
  ];

  const executionButtons = [
    {
     color: red200,
     type: 'execution-team-',
      weight: '-0.1',
      label: 'MINOR'
    },
    {
     color: red400,
     type: 'execution-team-',
      weight: '-0.3',
      label: 'DROP'
    }
  ];

  const annotationButtons = [
    "teamwork",
    "music",
    "flow",
    "variety",
    "general-impression"
  ];

  return (
    <div style={styles.container}>
      <div style={styles.vote}>
        <div style={styles.header}>Difficulty: <Total type={`difficulty-team-${teamLetter}`} startingPoint="5.0" /></div>
        <div style={styles.annotation}>
          {
            difficultyButtons.map((button) => 
              <RaisedButton
                key={`${button.label}-${teamLetter}`}
                label={button.label}
                buttonStyle={{
                  backgroundColor: button.color
                }}
                style={styles.raisedButton}
                labelStyle={styles.raisedButtonLabel}
                onTouchTap={e => {
                    e.preventDefault()
                    onClick(`${button.type}${teamLetter}`, button.weight)
                  }}
              />
            )
          }
        </div>
      </div>
      <div style={styles.vote}>
        <div style={styles.header}>Execution: <Total type={`execution-team-${teamLetter}`} startingPoint="10.0" /></div>
        <div style={styles.annotation}>
          {
            executionButtons.map((button) => 
              <RaisedButton
                key={`${button.label}-${teamLetter}`}
                label={button.label}
                buttonStyle={{
                  backgroundColor: button.color
                }}
                style={styles.raisedButton}
                labelStyle={styles.raisedButtonLabel}
                onTouchTap={e => {
                    e.preventDefault()
                    onClick(`${button.type}${teamLetter}`, button.weight)
                  }}
              />
            )
          }
        </div>
      </div>
      <div style={styles.separator}>
        <h3> --------- Under this line it's only an annotation, not final vote --------------------------------------------------- </h3>
      </div>
      <div className="annotation-block" style={styles.annotation}>
          {
            annotationButtons.map((button) => 
              <Paper style={styles.paper} key={`${button}-team-${teamLetter}-annotation`}>
                <div style={styles.annotation}>{button}</div>
                <FloatingActionButton
                  style={{margin: 6}}
                  onTouchTap={e => {
                      e.preventDefault()
                      onClick(`${button}-team-${teamLetter}-annotation`, -1)
                    }}
                >
                  <span>
                    -
                  </span>
                </FloatingActionButton>
                <FloatingActionButton
                  style={{margin: 6}}
                  secondary={true}
                  onTouchTap={e => {
                      e.preventDefault()
                      onClick(`${button}-team-${teamLetter}-annotation`, 1)
                    }}
                >
                  <span>
                    +
                  </span>
                </FloatingActionButton>
                <div style={styles.annotation}>Annotations</div>
                <ReviewResults type={`${button}-team-${teamLetter}-annotation`} />
              </Paper>
              )
          }
      </div>
    </div>
  );
};

LiveJudging.propTypes = {
  onClick: PropTypes.func.isRequired,
  teamLetter: PropTypes.string
}

export default LiveJudging
