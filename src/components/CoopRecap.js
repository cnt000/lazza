import React from 'react'
import Total from './Total'
import ReviewResults from './ReviewResults/ReviewResults'

const styles = {
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
  }
};

const CoopRecap = ({children}) => {

  return (
    <div style={styles.columns}>
      <div style={styles.column}>
        <h3 style={styles.title}>Team A results:</h3>
        Teamwork A:
        <Total type="teamwork-team-A" startingPoint="0.0"/>
        <br/>
        Music A:
        <Total type="music-team-A" startingPoint="0.0"/>
        <br/>
        Flow A:
        <Total type="flow-team-A" startingPoint="0.0"/>
        <br/>
        Variety A:
        <Total type="variety-team-A" startingPoint="0.0"/>
        <br/>
        General Impression A:
        <Total type="general-impression-team-A" startingPoint="0.0"/>
        <br/>
        Difficulty A:
        <Total type="difficulty-team-A" startingPoint="0.0"/>
        <br/>
        Execution A:
        <Total type="execution-team-A" startingPoint="0.0"/>
        <br/>
        <br/>
        <br/>
        Review Difficulty and Execution:
        <br/>
        <ReviewResults label="Difficulty" type="difficulty-team-A"/>
        <ReviewResults label="Execution" type="execution-team-A"/>
      </div>
      <div style={styles.column}>
        <h3 style={styles.title}>Team B results:</h3>
        Teamwork B:
        <Total type="teamwork-team-B" startingPoint="0.0"/>
        <br/>
        Music B:
        <Total type="music-team-B" startingPoint="0.0"/>
        <br/>
        Flow B:
        <Total type="flow-team-B" startingPoint="0.0"/>
        <br/>
        Variety B:
        <Total type="variety-team-B" startingPoint="0.0"/>
        <br/>
        General Impression B:
        <Total type="general-impression-team-B" startingPoint="0.0"/>
        <br/>
        Difficulty B:
        <Total type="difficulty-team-B" startingPoint="0.0"/>
        <br/>
        Execution B:
        <Total type="execution-team-B" startingPoint="0.0"/>
        <br/>
        <br/>
        <br/>
        Review Difficulty and Execution:
        <ReviewResults label="Difficulty" type="difficulty-team-B"/>
        <ReviewResults label="Execution" type="execution-team-B"/>
      </div>
    </div>
  )
}

export default CoopRecap
