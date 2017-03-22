import React from 'react'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'
import VoteContainer from '../containers/VoteContainer'
import Total from '../components/Total'
import ReviewResults from '../components/ReviewResults/ReviewResults'
import Paper from 'material-ui/Paper'

const LiveJudging = ({ teamLetter}) => {

  const styles = {
    container: {
      margin: '0 10px',
      height: 'calc(100vh - 48px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignContent: 'stretch',
      alignItems: 'stretch'
    },
    annotation: {
      flex: '1 1 auto',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      fontSize: '24px',
    },
    vote: {
      height: '30%'
    },
    separator: {
      height: '10%'
    },
    header: {
      margin: 10,
      fontSize: '28px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    paper: {
      padding: '4px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.vote}>
        <div style={styles.header}>Difficulty: <Total type={`difficulty-team-${teamLetter}`} startingPoint="5.0" /></div>
        <div style={styles.annotation}>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="-0.5" oneshot="false" nameClass="bad">BAD <span>0-2.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="-0.25" oneshot="false" nameClass="not-good" >NOT GOOD <span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0" oneshot="false" nameClass="medium" >MEDIUM <span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0.25" oneshot="false" nameClass="good" >GOOD <span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0.5" oneshot="false" nameClass="amazing">AMAZING <span>8.1-10.0</span></VoteContainer>
        </div>
      </div>
      <div style={styles.vote}>
        <div style={styles.header}>Execution: <Total type={`execution-team-${teamLetter}`} startingPoint="10.0" /></div>
        <div style={styles.annotation}>
          <VoteContainer type={`execution-team-${teamLetter}`} weight="-0.1" oneshot="false" nameClass="medium">MINOR<span>-0.1</span></VoteContainer>
          <VoteContainer type={`execution-team-${teamLetter}`} weight="-0.3" oneshot="false" nameClass="bad">DROP<span>-0.3</span></VoteContainer>
        </div>
      </div>
      <div style={styles.separator}>
        <h3> --------- Under this line it's only an annotation, not final vote --------------------------------------------------- </h3>
      </div>
      <div className="annotation-block" style={styles.annotation}>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Teamwork</div>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`teamwork-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Music</div>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`music-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Flow</div>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`flow-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Variety</div>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`variety-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>General Impression</div>
          <VoteContainer type={`general-impression-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`general-impression-team-${teamLetter}-annotation`} />
        </Paper>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    teamLetter: ownProps.teamLetter
  }
}

export default connect(
  mapStateToProps
)(LiveJudging)