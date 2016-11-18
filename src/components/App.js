import React, { Component } from 'react';
import VoteContainer from '../containers/VoteContainer';
import FieldContainer from '../containers/FieldContainer';
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
            Players:
            <FieldContainer type="player-A1" />
            <FieldContainer type="player-A2" />
            <FieldContainer type="player-A3" />
            <FieldContainer type="player-A4" />
            <FieldContainer type="player-A5" />
        </div>
        Execution
        <div>
          <VoteRow type="execution">
            <Total type="execution" />
            <VoteContainer type="execution" weight="0.1" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="execution" weight="0.2" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="execution" weight="0.3" oneshot="false">GOOD</VoteContainer>
          </VoteRow>
          Review Result:
          <PartialResult type="execution" />
        </div>
        Difficulty
        <div>
            <VoteContainer type="difficulty" weight="-0.25" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="difficulty" weight="0" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="difficulty" weight="0.25" oneshot="false">GOOD</VoteContainer>
            <VoteContainer type="difficulty" weight="0.5" oneshot="false">GOOD</VoteContainer>
            <PartialResult type="difficulty" />
        </div>
        Variety
        <div>
            <VoteContainer type="variety" weight="1" oneshot="true">1</VoteContainer>
            <VoteContainer type="variety" weight="2" oneshot="true">2</VoteContainer>
            <VoteContainer type="variety" weight="3" oneshot="true">3</VoteContainer>
            <PartialResult type="variety" />
        </div>
        Teamwork
        <div>
            <VoteContainer type="teamwork" weight="1" oneshot="true">1</VoteContainer>
            <VoteContainer type="teamwork" weight="2" oneshot="true">2</VoteContainer>
            <VoteContainer type="teamwork" weight="3" oneshot="true">3</VoteContainer>
            <PartialResult type="teamwork" />
        </div>
      </div>
    );
  }
}

export default App;
