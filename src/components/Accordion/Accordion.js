import React from 'react';
import Registration from '../../components/Registration';
import LiveJudging from '../../components/LiveJudging';
import Total from '../../components/Total';
import ReviewResults from '../../components/ReviewResults/ReviewResults';
import SendResponseContainer from '../../containers/SendResponseContainer';
import FinalJudging from '../../components/FinalJudging';
import WinnerBadge from '../../components/WinnerBadge';
import ResetAll from '../../components/ResetAll';
import './Accordion.css';

var Section = React.createClass({
  handleClick: function(){
    if(this.state.open) {
      this.setState({
        open: false,
        class: "section"
      });
    }else{
      this.setState({
        open: true,
        class: "section open"
      });
    }
  },
  getInitialState: function(){
     return {
       open: false,
       class: "section"
     }
  },
  render: function() {
    return (
      <div className={this.state.class}>
        <button className="accordion-toggle">toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

var Accordion = React.createClass({

  render: function() {
    return (
      <div className="main-accordion">
        <div className="title">{this.props.title}</div>

        <Section title="1 - Registration">
          <Registration />
        </Section>

        <Section title="2 - Team A - Live judging">
          <LiveJudging teamLetter="A" />
        </Section>

        <Section title="3 - Team A - Review and Artistic Impression">
          <h2>REVIEW DIFFICULTY / EXECUTION</h2>
          <div className="vote-row">
            <div className="playersTeamTitle">Difficulty Review:</div>
            <ReviewResults type="difficulty-team-A" />
            <br/>
            <div className="playersTeamTitle">Execution Review:</div>
            <ReviewResults type="execution-team-A" />
          </div>
          <FinalJudging teamLetter="A" />
        </Section>

        <Section title="4 - Team B - Live judging">
          <LiveJudging teamLetter="B" />
        </Section>

        <Section title="5 - Team B - Review and Artistic Impression">
          <h2>REVIEW DIFFICULTY / EXECUTION</h2>
          <div className="vote-row">
            <div className="playersTeamTitle">Difficulty Review:</div>
            <ReviewResults type="difficulty-team-B" />
            <br/>
            <div className="playersTeamTitle">Execution Review:</div>
            <ReviewResults type="execution-team-B" />
          </div>
          <FinalJudging teamLetter="B" />
        </Section>

        <Section title="6 - Submit Final Vote">
          <div className="final-vote-row vote-row">

            <div className="playersTeamTitle">Team A Final Review:</div>
            <div className="resultBox">
              <div className="playersTeamTitle">Execution:</div>
              <ReviewResults type="execution-team-A" />
            </div>
            <div className="resultBox">
              <div className="playersTeamTitle">Difficulty:</div>
              <ReviewResults type="difficulty-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Teamwork:</div>
              <ReviewResults type="teamwork-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Music:</div>
              <ReviewResults type="music-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Flow:</div>
              <ReviewResults type="flow-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Variety:</div>
              <ReviewResults type="variety-team-A" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">General Imp.:</div>
              <ReviewResults type="general-impression-team-A" />
            </div>
          </div>
          <div className="final-vote-row vote-row">
            <div className="playersTeamTitle">Team B Final Review:</div>
            <div className="resultBox">
              <div className="playersTeamTitle">Execution:</div>
              <ReviewResults type="execution-team-B" />
            </div>
            <div className="resultBox">
              <div className="playersTeamTitle">Difficulty:</div>
              <ReviewResults type="difficulty-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Teamwork:</div>
              <ReviewResults type="teamwork-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Music:</div>
              <ReviewResults type="music-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Flow:</div>
              <ReviewResults type="flow-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">Variety:</div>
              <ReviewResults type="variety-team-B" />
            </div>
            <div className="resultBox small">
              <div className="playersTeamTitle">General Imp.:</div>
              <ReviewResults type="general-impression-team-B" />
            </div>
          </div>
          <div className="review-row">
            difficulty A:
            <Total type="difficulty-team-A" startingPoint="5.0" />
            difficulty B:
            <Total type="difficulty-team-B" startingPoint="5.0" />

            execution A:
            <Total type="execution-team-A" startingPoint="10.0" />
            execution B:
            <Total type="execution-team-B" startingPoint="10.0" />

            teamwork A:
            <Total type="teamwork-team-A" startingPoint="0.0" />
            teamwork B:
            <Total type="teamwork-team-B" startingPoint="0.0" />
            music A:
            <Total type="music-team-A" startingPoint="0.0" />
            music B:
            <Total type="music-team-B" startingPoint="0.0" />
            flow A:
            <Total type="flow-team-A" startingPoint="0.0" />
            flow B:
            <Total type="flow-team-B" startingPoint="0.0" />
            variety A:
            <Total type="variety-team-A" startingPoint="0.0" />
            variety B:
            <Total type="variety-team-B" startingPoint="0.0" />
            general impression A:
            <Total type="general-impression-team-A" startingPoint="0.0" />
            general impression B:
            <Total type="general-impression-team-B" startingPoint="0.0" />
          </div>
          <WinnerBadge />
          <SendResponseContainer>Send Final Response</SendResponseContainer>
          <div className="vote-row">
            RESET ALL DATA! USE IT CAREFULLY<br/>
            <ResetAll>Reset All Data</ResetAll>
          </div>
        </Section>
      </div>
    );
  }
});

export default Accordion;
