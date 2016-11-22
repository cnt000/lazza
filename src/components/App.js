import React, { Component } from 'react';
import VoteContainer from '../containers/VoteContainer';
import FieldContainer from '../containers/FieldContainer';
import PlayContainer from '../containers/PlayContainer';
import PartialResult from '../components/PartialResult';
import VoteRow from '../components/VoteRow';
import Total from '../components/Total';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Team Battle</h2>
        </div>

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
        <h2>TEAM A</h2>
        Difficulty
        <div>
            <VoteContainer type="difficulty" weight="-0.5" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="difficulty" weight="-0.25" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="difficulty" weight="0" oneshot="false">MEDIUM</VoteContainer>
            <VoteContainer type="difficulty" weight="0.25" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="difficulty" weight="0.5" oneshot="false">AMAZING</VoteContainer>
            <PartialResult type="difficulty" />
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
        <h2>Annotations AI</h2>
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

        <h2>ARTISTIC IMPRESSION</h2>
        Teamwork
        <div>
          <VoteContainer type="teamwork" weight="0" oneshot="false">BAD</VoteContainer>
          <VoteContainer type="teamwork" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
          <VoteContainer type="teamwork" weight="1" oneshot="false">MEDIUM</VoteContainer>
          <VoteContainer type="teamwork" weight="1.5" oneshot="false">GOOD</VoteContainer>
          <VoteContainer type="teamwork" weight="2" oneshot="false">AMAZING</VoteContainer>
          <PartialResult type="teamwork" />
        </div>
        Music
        <div>
          <VoteContainer type="music" weight="0" oneshot="false">BAD</VoteContainer>
          <VoteContainer type="music" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
          <VoteContainer type="music" weight="1" oneshot="false">MEDIUM</VoteContainer>
          <VoteContainer type="music" weight="1.5" oneshot="false">GOOD</VoteContainer>
          <VoteContainer type="music" weight="2" oneshot="false">AMAZING</VoteContainer>
          <PartialResult type="music" />
        </div>
        Flow
        <div>
          <VoteContainer type="flow" weight="0" oneshot="false">BAD</VoteContainer>
          <VoteContainer type="flow" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
          <VoteContainer type="flow" weight="1" oneshot="false">MEDIUM</VoteContainer>
          <VoteContainer type="flow" weight="1.5" oneshot="false">GOOD</VoteContainer>
          <VoteContainer type="flow" weight="2" oneshot="false">AMAZING</VoteContainer>
          <PartialResult type="flow" />
        </div>
        Variety
        <div>
          <VoteContainer type="variety" weight="0" oneshot="false">BAD</VoteContainer>
          <VoteContainer type="variety" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
          <VoteContainer type="variety" weight="1" oneshot="false">MEDIUM</VoteContainer>
          <VoteContainer type="variety" weight="1.5" oneshot="false">GOOD</VoteContainer>
          <VoteContainer type="variety" weight="2" oneshot="false">AMAZING</VoteContainer>
          <PartialResult type="variety" />
        </div>
        General Impression
        <div>
          <VoteContainer type="general-impression" weight="0" oneshot="false">BAD</VoteContainer>
          <VoteContainer type="general-impression" weight="0.5" oneshot="false">NOT GOOD</VoteContainer>
          <VoteContainer type="general-impression" weight="1" oneshot="false">MEDIUM</VoteContainer>
          <VoteContainer type="general-impression" weight="1.5" oneshot="false">GOOD</VoteContainer>
          <VoteContainer type="general-impression" weight="2" oneshot="false">AMAZING</VoteContainer>
          <PartialResult type="general-impression" />
        </div>
      </div>
    );
  }
}

export default App;
