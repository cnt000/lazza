import React from 'react'
import { connect } from 'react-redux'
import VoteContainer from '../containers/VoteContainer';
import VoteRow from '../components/VoteRow/VoteRow';
import Total from '../components/Total';
import ReviewResults from '../components/ReviewResults/ReviewResults';

const LiveJudging = ({ teamLetter}) => {
  return (
    <div>
      <VoteRow type="difficulty-team-A">
        <div className="playersTeamTitle">Difficulty</div>
        <br/>
        <VoteContainer type={`difficulty-team-${teamLetter}`} weight="-0.5" oneshot="false" nameClass="bad">BAD<span>0-2.0</span></VoteContainer>
        <VoteContainer type={`difficulty-team-${teamLetter}`} weight="-0.25" oneshot="false" nameClass="not-good" >NOT GOOD<span>2.1-4.0</span></VoteContainer>
        <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0" oneshot="false" nameClass="medium" >MEDIUM<span>4.1-6.0</span></VoteContainer>
        <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0.25" oneshot="false" nameClass="good" >GOOD<span>6.1-8.0</span></VoteContainer>
        <VoteContainer type={`difficulty-team-${teamLetter}`} weight="0.5" oneshot="false" nameClass="amazing">AMAZING<span>8.1-10.0</span></VoteContainer>
        <br/>
        Result: <Total type={`difficulty-team-${teamLetter}`} startingPoint="5.0" />
      </VoteRow>
      <VoteRow type="execution-team-A">
        <div className="playersTeamTitle">Execution</div>
        <br/>
        <VoteContainer type={`execution-team-${teamLetter}`} weight="-0.1" oneshot="false" nameClass="medium">MINOR<span>-0.1</span></VoteContainer>
        <VoteContainer type={`execution-team-${teamLetter}`} weight="-0.3" oneshot="false" nameClass="bad">DROP<span>-0.3</span></VoteContainer>
        <br/>
        Result: <Total type={`execution-team-${teamLetter}`} startingPoint="10.0" />
      </VoteRow>
      //----- Under this line it's only an annotation, not final vote -----
      <div className="vote-row annotation-block">
        <div>
          <div className="playersTeamTitle">Teamwork</div>
          <br/>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`teamwork-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`teamwork-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div className="playersTeamTitle">Music</div>
          <br/>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`music-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`music-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div className="playersTeamTitle">Flow</div>
          <br/>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`flow-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`flow-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div className="playersTeamTitle">Variety</div>
          <br/>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="-1" oneshot="false" nameClass="bad">-</VoteContainer>
          <VoteContainer type={`variety-team-${teamLetter}-annotation`} weight="1" oneshot="false" nameClass="amazing">+</VoteContainer>
          <ReviewResults type={`variety-team-${teamLetter}-annotation`} />
        </div>
        <div>
          <div className="playersTeamTitle">General Imp.</div>
          <br/>
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
