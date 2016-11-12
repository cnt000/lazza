import React, { Component } from 'react';
import VoteContainer from '../containers/VoteContainer';
import FieldContainer from '../containers/FieldContainer';
import ResultContainer from '../containers/ResultContainer';
import CustomTextInput from '../components/CustomTextInput';
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
        <CustomTextInput />
        Judge
        <div>
            <FieldContainer type="judge">Judge</FieldContainer>
            <FieldContainer type="player-A1">Judge</FieldContainer>
            <FieldContainer type="player-A2">Judge</FieldContainer>
            <FieldContainer type="player-A3">Judge</FieldContainer>
            <FieldContainer type="player-A4">Judge</FieldContainer>
            <FieldContainer type="player-A5">Judge</FieldContainer>
        </div>
        Execution
        <div>
            <VoteContainer type="execution" weight="0.1" oneshot="false">BAD</VoteContainer>
            <VoteContainer type="execution" weight="0.2" oneshot="false">NOT GOOD</VoteContainer>
            <VoteContainer type="execution" weight="0.3" oneshot="false">GOOD</VoteContainer>
            <ResultContainer type="execution"></ResultContainer>
        </div>
        Variety
        <div>
            <VoteContainer type="variety" weight="1" oneshot="true">1</VoteContainer>
            <VoteContainer type="variety" weight="2" oneshot="true">2</VoteContainer>
            <VoteContainer type="variety" weight="3" oneshot="true">3</VoteContainer>
            <ResultContainer type="variety"></ResultContainer>
        </div>
      </div>
    );
  }
}

export default App;
