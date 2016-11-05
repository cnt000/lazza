import React, { Component } from 'react';
import VoteContainer from '../containers/VoteContainer';
import FieldContainer from '../containers/FieldContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Team Battle</h2>
        </div>
        Judge
        <div>
            <FieldContainer type="judge">Judge</FieldContainer>
            <FieldContainer type="player-team-A">Player 1A:</FieldContainer>
        </div>
        Execution
        <div>
            <VoteContainer type="execution" weight="0.1" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="execution" weight="0.2" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="execution" weight="0.3" oneshot="false">GOOD</VoteContainer>
        </div>
        Variety
        <div>
            <VoteContainer type="variety" weight="1" oneshot="true">1</VoteContainer>
            <VoteContainer type="variety" weight="2" oneshot="true">2</VoteContainer>
            <VoteContainer type="variety" weight="3" oneshot="true">3</VoteContainer>
        </div>
      </div>
    );
  }
}

export default App;
