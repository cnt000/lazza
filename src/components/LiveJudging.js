import React from 'react';
import Divider from 'material-ui/Divider';
import { connect } from 'react-redux';
import VoteContainer from '../containers/VoteContainer';
import VoteRow from '../components/VoteRow/VoteRow';
import Total from '../components/Total';
import ReviewResults from '../components/ReviewResults/ReviewResults';

const LiveJudging = ({ teamLetter}) => {

  const annotationStyle = {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around'
  };

  const headerStyle = {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-between'
  };

  return (
    <div>
      <VoteRow type="difficulty-team-A">
        <div style={headerStyle}>Difficulty: <Total type={`difficulty-team-${teamLetter}`} startingPoint="5.0" /></div>
        <div style={annotationStyle}>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="-0.5" oneshot="false" nameClass="bad">BAD<span>0-2.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="-0.25" oneshot="false" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0" oneshot="false" nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0.25" oneshot="false" nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0.5" oneshot="false" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        </div>
      </VoteRow>
      <VoteRow type="execution-team-A">
        <div style={headerStyle}>Execution: <Total type={`execution-team-${teamLetter}`} startingPoint="10.0" /></div>
        <div style={annotationStyle}>
          <VoteContainer type={`execution-team-${teamLetter}`} weight="-0.1" oneshot="false" nameClass="medium">MINOR<span>-0.1</span></VoteContainer>
          <VoteContainer type={`execution-team-${teamLetter}`} weight="-0.3" oneshot="false" nameClass="bad">DROP<span>-0.3</span></VoteContainer>
        </div>
      </VoteRow>
      <h3> ----------- Under this line it's only an annotation, not final vote ------------------------------------------------------- </h3>
      <div className="vote-row annotation-block" style={annotationStyle}>
        <div>
          <div style={annotationStyle}>Teamwork</div>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`teamwork-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div style={annotationStyle}>Music</div>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`music-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div style={annotationStyle}>Flow</div>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`flow-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div style={annotationStyle}>Variety</div>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`variety-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div style={annotationStyle}>General Imp.</div>
          <VoteContainer type={`general-impression-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`general-impression-team-${teamLetter}-annotation`} />
        </div>
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
