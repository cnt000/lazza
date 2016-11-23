import React from 'react';
import VoteContainer from '../containers/VoteContainer';
import FieldContainer from '../containers/FieldContainer';
import PlayContainer from '../containers/PlayContainer';
import PartialResult from '../components/PartialResult';
import VoteRow from '../components/VoteRow';
import Total from '../components/Total';
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
          <div>Judge
              <FieldContainer type="judge" />
              <select type="type-of-game">
                <option value="Pair">Pair</option>
                <option value="Co-op">Co-op</option>
                <option value="SuperPro">SuperPro</option>
              </select>
              <br/>
              Players:
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
          </div>
        </Section>
        <Section title="2 - Team A - Live judging">
          Difficulty
          <div>
            <PartialResult type="difficulty" />
              <VoteContainer type="difficulty" weight="-0.5" oneshot="false">BAD</VoteContainer>
              <VoteContainer type="difficulty" weight="-0.25" oneshot="false">NOT GOOD</VoteContainer>
              <VoteContainer type="difficulty" weight="0" oneshot="false">MEDIUM</VoteContainer>
              <VoteContainer type="difficulty" weight="0.25" oneshot="false">GOOD</VoteContainer>
              <VoteContainer type="difficulty" weight="0.5" oneshot="false">AMAZING</VoteContainer>
          </div>
          Execution
          <div>
            <VoteRow type="execution">
              <Total type="execution" />
              <VoteContainer type="execution" weight="0.1" oneshot="false">MINOR</VoteContainer>
              <VoteContainer type="execution" weight="0.3" oneshot="false">DROP</VoteContainer>
            </VoteRow>
            Review Result:
            <PartialResult type="execution" />
          </div>
          Teamwork
          <div>
            <VoteContainer type="teamwork-annotation" weight="1" oneshot="false">+</VoteContainer>
            <VoteContainer type="teamwork-annotation" weight="-1" oneshot="false">-</VoteContainer>
            <PartialResult type="teamwork-annotation" />
          </div>
          Music
          <div>
            <VoteContainer type="music-annotation" weight="1" oneshot="false">+</VoteContainer>
            <VoteContainer type="music-annotation" weight="-1" oneshot="false">-</VoteContainer>
            <PartialResult type="music-annotation" />
          </div>
          Flow
          <div>
            <VoteContainer type="flow-annotation" weight="1" oneshot="false">+</VoteContainer>
            <VoteContainer type="flow-annotation" weight="-1" oneshot="false">-</VoteContainer>
            <PartialResult type="flow-annotation" />
          </div>
          Variety
          <div>
            <VoteContainer type="variety-annotation" weight="1" oneshot="false">+</VoteContainer>
            <VoteContainer type="variety-annotation" weight="-1" oneshot="false">-</VoteContainer>
            <PartialResult type="variety-annotation" />
          </div>
          General Impression
          <div>
            <VoteContainer type="general-impression-annotation" weight="1" oneshot="false">+</VoteContainer>
            <VoteContainer type="general-impression-annotation" weight="-1" oneshot="false">-</VoteContainer>
            <PartialResult type="general-impression-annotation" />
          </div>
        </Section>
        <Section title="3 - Review Team A and Artistic Impression">
          Teamwork
          <div>
            <PartialResult type="teamwork" />
            <VoteContainer type="teamwork" weight="0" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="teamwork" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="teamwork" weight="1" oneshot="false">MEDIUM</VoteContainer>
            <VoteContainer type="teamwork" weight="1.5" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="teamwork" weight="2" oneshot="false">AMAZING</VoteContainer>
          </div>
          Music
          <div>
            <PartialResult type="music" />
            <VoteContainer type="music" weight="0" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="music" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="music" weight="1" oneshot="false">MEDIUM</VoteContainer>
            <VoteContainer type="music" weight="1.5" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="music" weight="2" oneshot="false">AMAZING</VoteContainer>
          </div>
          Flow
          <div>
            <PartialResult type="flow" />
            <VoteContainer type="flow" weight="0" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="flow" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="flow" weight="1" oneshot="false">MEDIUM</VoteContainer>
            <VoteContainer type="flow" weight="1.5" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="flow" weight="2" oneshot="false">AMAZING</VoteContainer>
          </div>
          Variety
          <div>
            <PartialResult type="variety" />
            <VoteContainer type="variety" weight="0" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="variety" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="variety" weight="1" oneshot="false">MEDIUM</VoteContainer>
            <VoteContainer type="variety" weight="1.5" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="variety" weight="2" oneshot="false">AMAZING</VoteContainer>
          </div>
          General Impression
          <div>
            <PartialResult type="general-impression" />
            <VoteContainer type="general-impression" weight="0" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="general-impression" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="general-impression" weight="1" oneshot="false">MEDIUM</VoteContainer>
            <VoteContainer type="general-impression" weight="1.5" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="general-impression" weight="2" oneshot="false">AMAZING</VoteContainer>
          </div>
        </Section>
        <Section title="4 - Team B - Live judging">

        </Section>
        <Section title="5 - Review Team B and Artistic Impression">

        </Section>
        <Section title="6 - Submit Final Vote">

        </Section>
      </div>
    );
  }
});

export default Accordion;
