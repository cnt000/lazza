import React from 'react';
import VoteContainer from '../../containers/VoteContainer';
import FieldContainer from '../../containers/FieldContainer';
import PlayContainer from '../../containers/PlayContainer';
import GameTypeContainer from '../../containers/GameTypeContainer';
import ReviewResults from '../../components/ReviewResults/ReviewResults';
import VoteRow from '../../components/VoteRow';
import Total from '../../components/Total';
import WinnerBadge from '../../components/WinnerBadge';
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
          <div>
              <GameTypeContainer type="gametype" />
              <br/>
              Judge
              <FieldContainer type="judge" />
              <br/>
              Players Team A:
              <FieldContainer type="player-A1-name" />
              <PlayContainer type="player-A1-play" />

              <FieldContainer type="player-A2-name" />
              <PlayContainer type="player-A2-play" />

              <FieldContainer type="player-A3-name" />
              <PlayContainer type="player-A3-play" />

              <FieldContainer type="player-A4-name" />
              <PlayContainer type="player-A4-play" />

              <FieldContainer type="player-A5-name" />
              <PlayContainer type="player-A5-play" />

              <br/>
              Players Team B:
              <FieldContainer type="player-B1-name" />
              <PlayContainer type="player-B1-play" />

              <FieldContainer type="player-B2-name" />
              <PlayContainer type="player-B2-play" />

              <FieldContainer type="player-B3-name" />
              <PlayContainer type="player-B3-play" />

              <FieldContainer type="player-B4-name" />
              <PlayContainer type="player-B4-play" />

              <FieldContainer type="player-B5-name" />
              <PlayContainer type="player-B5-play" />
          </div>
        </Section>
        <Section title="2 - Team A - Live judging">
          <div className="vote-row">
              Difficulty
              <br/>
              <VoteContainer type="difficulty-team-A" weight="-0.5" oneshot="false">BAD</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="-0.25" oneshot="false">NOT GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0" oneshot="false">MEDIUM</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0.25" oneshot="false">GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-A" weight="0.5" oneshot="false">AMAZING</VoteContainer>
              <br/>
              Result: <Total type="difficulty-team-A" />
          </div>
          <div>
            <VoteRow type="execution-team-A">
              Execution
              <br/>
              <VoteContainer type="execution-team-A" weight="-0.1" oneshot="false">MINOR</VoteContainer>
              <VoteContainer type="execution-team-A" weight="-0.3" oneshot="false">DROP</VoteContainer>
              <br/>
              Result: <Total type="execution-team-A" />
            </VoteRow>
          </div>
          <div className="vote-row annotation-block">
            <div>
              Teamwork
              <br/>
              <VoteContainer type="teamwork-team-A-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="teamwork-team-A-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="teamwork-team-A-annotation" />
            </div>
            <div>
              Music
              <br/>
              <VoteContainer type="music-team-A-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="music-team-A-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="music-team-A-annotation" />
            </div>
            <div>
              Flow
              <br/>
              <VoteContainer type="flow-team-A-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="flow-team-A-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="flow-team-A-annotation" />
            </div>
            <div>
              Variety
              <br/>
              <VoteContainer type="variety-team-A-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="variety-team-A-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="variety-team-A-annotation" />
            </div>
            <div>
              General Impression
              <br/>
              <VoteContainer type="general-impression-team-A-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="general-impression-team-A-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="general-impression-team-A-annotation" />
            </div>
          </div>
        </Section>
        <Section title="3 - Review Team A and Artistic Impression">
          <div className="vote-row">
            Difficulty Review:
            <ReviewResults type="difficulty-team-A" />
            <br/>
            Execution Review:
            <ReviewResults type="execution-team-A" />
          </div>
          <div className="vote-row">
            Teamwork<br/>
            <Total type="teamwork-team-A" />
            <VoteContainer type="teamwork-team-A" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-A" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="teamwork-team-A-annotation" />
          </div>
          <div className="vote-row">
            Music<br/>
            <Total type="music-team-A" />
            <VoteContainer type="music-team-A" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="music-team-A" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="music-team-A" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="music-team-A" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="music-team-A" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="music-team-A-annotation" />
          </div>
          <div className="vote-row">
            Flow<br/>
            <Total type="flow-team-A" />
            <VoteContainer type="flow-team-A" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="flow-team-A" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="flow-team-A" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="flow-team-A" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="flow-team-A" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="flow-team-A-annotation" />
          </div>
          <div className="vote-row">
            Variety<br/>
            <Total type="variety-team-A" />
            <VoteContainer type="variety-team-A" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="variety-team-A" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="variety-team-A" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="variety-team-A" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="variety-team-A" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="variety-team-A-annotation" />
          </div>
          <div className="vote-row">
            General Impression<br/>
            <Total type="general-impression-team-A" />
            <VoteContainer type="general-impression-team-A" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-A" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="general-impression-team-A-annotation" />
          </div>
        </Section>
        <Section title="4 - Team B - Live judging">
          <div className="vote-row">
              Difficulty
              <br/>
              <VoteContainer type="difficulty-team-B" weight="-0.5" oneshot="false">BAD</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="-0.25" oneshot="false">NOT GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0" oneshot="false">MEDIUM</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0.25" oneshot="false">GOOD</VoteContainer>
              <VoteContainer type="difficulty-team-B" weight="0.5" oneshot="false">AMAZING</VoteContainer>
              <br/>
              Result: <Total type="difficulty-team-B" />
          </div>
          <div>
            <VoteRow type="execution-team-B">
              Execution
              <br/>
              <VoteContainer type="execution-team-B" weight="-0.1" oneshot="false">MINOR</VoteContainer>
              <VoteContainer type="execution-team-B" weight="-0.3" oneshot="false">DROP</VoteContainer>
              <br/>
              Result: <Total type="execution-team-B" />
            </VoteRow>
          </div>
          <div className="vote-row annotation-block">
            <div>
              Teamwork
              <br/>
              <VoteContainer type="teamwork-team-B-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="teamwork-team-B-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="teamwork-team-B-annotation" />
            </div>
            <div>
              Music
              <br/>
              <VoteContainer type="music-team-B-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="music-team-B-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="music-team-B-annotation" />
            </div>
            <div>
              Flow
              <br/>
              <VoteContainer type="flow-team-B-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="flow-team-B-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="flow-team-B-annotation" />
            </div>
            <div>
              Variety
              <br/>
              <VoteContainer type="variety-team-B-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="variety-team-B-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="variety-team-B-annotation" />
            </div>
            <div>
              General Impression
              <br/>
              <VoteContainer type="general-impression-team-B-annotation" weight="-1" oneshot="false">-</VoteContainer>
              <VoteContainer type="general-impression-team-B-annotation" weight="1" oneshot="false">+</VoteContainer>
              <ReviewResults type="general-impression-team-B-annotation" />
            </div>
          </div>
        </Section>
        <Section title="5 - Review Team B and Artistic Impression">
          <div className="vote-row">
            Difficulty Review:
            <ReviewResults type="difficulty-team-B" />
            <br/>
            Execution Review:
            <ReviewResults type="execution-team-B" />
          </div>
          <div className="vote-row">
            Teamwork<br/>
            <Total type="teamwork-team-B" />
            <VoteContainer type="teamwork-team-B" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="teamwork-team-B" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="teamwork-team-B-annotation" />
          </div>
          <div className="vote-row">
            Music<br/>
            <Total type="music-team-B" />
            <VoteContainer type="music-team-B" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="music-team-B" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="music-team-B" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="music-team-B" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="music-team-B" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="music-team-B-annotation" />
          </div>
          <div className="vote-row">
            Flow<br/>
            <Total type="flow-team-B" />
            <VoteContainer type="flow-team-B" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="flow-team-B" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="flow-team-B" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="flow-team-B" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="flow-team-B" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="flow-team-B-annotation" />
          </div>
          <div className="vote-row">
            Variety<br/>
            <Total type="variety-team-B" />
            <VoteContainer type="variety-team-B" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="variety-team-B" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="variety-team-B" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="variety-team-B" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="variety-team-B" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="variety-team-B-annotation" />
          </div>
          <div className="vote-row">
            General Impression<br/>
            <Total type="general-impression-team-B" />
            <VoteContainer type="general-impression-team-B" weight="0" oneshot="true">BAD</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="0.5" oneshot="true">NOT GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="1" oneshot="true">MEDIUM</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="1.5" oneshot="true">GOOD</VoteContainer>
            <VoteContainer type="general-impression-team-B" weight="2" oneshot="true">AMAZING</VoteContainer>
            <br/>
            Previous annotations: <ReviewResults type="general-impression-team-B-annotation" />
          </div>
        </Section>
        <Section title="6 - Submit Final Vote">
          <div className="final-vote-row vote-row">
            Team A Final Review:
            <h3>Execution:</h3>
            <ReviewResults type="execution-team-A" />
            <h3>Difficulty:</h3>
            <ReviewResults type="difficulty-team-A" />
            <h3>Teamwork:</h3>
            <ReviewResults type="teamwork-team-A" />
            <h3>Music:</h3>
            <ReviewResults type="music-team-A" />
            <h3>Flow:</h3>
            <ReviewResults type="flow-team-A" />
            <h3>Variety:</h3>
            <ReviewResults type="variety-team-A" />
            <h3>General impression:</h3>
            <ReviewResults type="general-impression-team-A" />
          </div>
          <div className="final-vote-row vote-row">
            Team B Final Review:
            <h3>Execution:</h3>
            <ReviewResults type="execution-team-B" />
            <h3>Difficulty:</h3>
            <ReviewResults type="difficulty-team-B" />
            <h3>Teamwork:</h3>
            <ReviewResults type="teamwork-team-B" />
            <h3>Music:</h3>
            <ReviewResults type="music-team-B" />
            <h3>Flow:</h3>
            <ReviewResults type="flow-team-B" />
            <h3>Variety:</h3>
            <ReviewResults type="variety-team-B" />
            <h3>General impression:</h3>
            <ReviewResults type="general-impression-team-B" />
          </div>
          <div className="vote-row">
            <WinnerBadge />
          </div>
        </Section>
      </div>
    );
  }
});

export default Accordion;
