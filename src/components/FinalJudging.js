import React from 'react'
import { connect } from 'react-redux'
import VoteContainer from '../containers/VoteContainer'
import Total from '../components/Total'
import ReviewResults from '../components/ReviewResults/ReviewResults'
import VoteRow from '../components/VoteRow/VoteRow'

const FinalJudging = ({ teamLetter}) => {

  const annotationStyle = {
    margin: 10,
    display: 'flex',
    justifyContent: 'space-around'
  };

  const headerStyle = {
    margin: 10
  };

  return (
    <div style={headerStyle}>
      <VoteRow type="difficulty-team-A">
        <span className="playersTeamTitle">Teamwork</span>: <Total type={`teamwork-team-${teamLetter}`} startingPoint="0.0" />
        <div style={annotationStyle}>
          <VoteContainer type={`teamwork-team-${teamLetter}`} weight="0" oneshot="true"nameClass="bad vote">BAD<span>0-2.0</span></VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}`} weight="0.5" oneshot="true" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}`} weight="1" oneshot="true"nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}`} weight="1.5" oneshot="true"nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}`} weight="2" oneshot="true" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        </div>
        <ReviewResults type={`teamwork-team-${teamLetter}-annotation`} />
      </VoteRow>
      <VoteRow type="difficulty-team-A">
        <span className="playersTeamTitle">Music</span>: <Total type={`music-team-${teamLetter}`} startingPoint="0.0" />
        <div style={annotationStyle}>
          <VoteContainer type={`music-team-${teamLetter}`} weight="0" oneshot="true"nameClass="bad vote">BAD<span>0-2.0</span></VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}`} weight="0.5" oneshot="true" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}`} weight="1" oneshot="true"nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}`} weight="1.5" oneshot="true"nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}`} weight="2" oneshot="true" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        </div>
        <ReviewResults type={`music-team-${teamLetter}-annotation`} />
      </VoteRow>
      <VoteRow type="difficulty-team-A">
        <span className="playersTeamTitle">Flow</span>: <Total type={`flow-team-${teamLetter}`} startingPoint="0.0" />
        <div style={annotationStyle}>
          <VoteContainer type={`flow-team-${teamLetter}`} weight="0" oneshot="true"nameClass="bad vote">BAD<span>0-2.0</span></VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}`} weight="0.5" oneshot="true" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}`} weight="1" oneshot="true"nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}`} weight="1.5" oneshot="true"nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}`} weight="2" oneshot="true" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        </div>
        <ReviewResults type={`flow-team-${teamLetter}-annotation`} />
      </VoteRow>
      <VoteRow type="difficulty-team-A">
        <span className="playersTeamTitle">Variety</span>: <Total type={`variety-team-${teamLetter}`} startingPoint="0.0" />
        <div style={annotationStyle}>
          <VoteContainer type={`variety-team-${teamLetter}`} weight="0" oneshot="true"nameClass="bad vote">BAD<span>0-2.0</span></VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}`} weight="0.5" oneshot="true" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}`} weight="1" oneshot="true"nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}`} weight="1.5" oneshot="true"nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}`} weight="2" oneshot="true" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        </div>
        <ReviewResults type={`variety-team-${teamLetter}-annotation`} />
      </VoteRow>
      <VoteRow type="difficulty-team-A">
        <span className="playersTeamTitle">General Imp.</span>: <Total type={`general-impression-team-${teamLetter}`} startingPoint="0.0" />
        <div style={annotationStyle}>
          <VoteContainer type={`general-impression-team-${teamLetter}`} weight="0" oneshot="true"nameClass="bad vote">BAD<span>0-2.0</span></VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}`} weight="0.5" oneshot="true" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}`} weight="1" oneshot="true"nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}`} weight="1.5" oneshot="true"nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
          <VoteContainer type={`general-impression-team-${teamLetter}`} weight="2" oneshot="true" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        </div>
        <ReviewResults type={`general-impression-team-${teamLetter}-annotation`} />
      </VoteRow>
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
)(FinalJudging)
