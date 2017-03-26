import React from 'react'
import { connect } from 'react-redux'
import VoteContainer from '../containers/VoteContainer'
import Total from '../components/Total'
import ReviewResults from '../components/ReviewResults/ReviewResults'
import Paper from 'material-ui/Paper'
import {red200, red400, green200, green300, green400, green500, green600} from 'material-ui/styles/colors'

const LiveJudging = ({ teamLetter}) => {

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

  return (
    <div style={styles.container}>
      <div style={styles.vote}>
        <div style={styles.header}>Difficulty: <Total type={`difficulty-team-${teamLetter}`} startingPoint="5.0" /></div>
        <div style={styles.annotation}>
          <VoteContainer color={green200} type={`difficulty-team-${teamLetter}`} weight="-0.5">BAD<span style={styles.weight}>0-2.0</span></VoteContainer>
          <VoteContainer color={green300} type={`difficulty-team-${teamLetter}`} weight="-0.25">NOTGOOD<span style={styles.weight}>2.1-4.0</span></VoteContainer>
          <VoteContainer color={green400} type={`difficulty-team-${teamLetter}`} weight="0" >MEDIUM<span style={styles.weight}>4.1-6.0</span></VoteContainer>
          <VoteContainer color={green500} type={`difficulty-team-${teamLetter}`} weight="0.25" >GOOD<span style={styles.weight}>6.1-8.0</span></VoteContainer>
          <VoteContainer color={green600} type={`difficulty-team-${teamLetter}`} weight="0.5">AMAZING<span style={styles.weight}>8.1-10.0</span></VoteContainer>
        </div>
      </div>
      <div style={styles.vote}>
        <div style={styles.header}>Execution: <Total type={`execution-team-${teamLetter}`} startingPoint="10.0" /></div>
        <div style={styles.annotation}>
          <VoteContainer color={red200} type={`execution-team-${teamLetter}`} weight="-0.1">MINOR <span style={styles.weight}>-0.1</span></VoteContainer>
          <VoteContainer color={red400} type={`execution-team-${teamLetter}`} weight="-0.3">DROP <span style={styles.weight}>-0.3</span></VoteContainer>
        </div>
      </div>
      <div style={styles.separator}>
        <h3> --------- Under this line it's only an annotation, not final vote --------------------------------------------------- </h3>
      </div>
      <div className="annotation-block" style={styles.annotation}>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Teamwork</div>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="-1">-</VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="1">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`teamwork-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Music</div>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="-1">-</VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="1">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`music-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Flow</div>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="-1">-</VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="1">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`flow-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>Variety</div>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="-1">-</VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="1">+</VoteContainer>
          <div style={styles.annotation}>Annotations</div>
          <ReviewResults type={`variety-team-${teamLetter}-annotation`} />
        </Paper>
        <Paper style={styles.paper}>
          <div style={styles.annotation}>General Impression</div>
          <VoteContainer type={`general-impression-team-${teamLetter}-annotation`} weight="-1">-</VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}-annotation`} weight="1">+</VoteContainer>
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
