import React, { Component } from 'react';
import VoteContainer from '../containers/VoteContainer'
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
        <VoteContainer type="execution" weight="0.1" oneshot="false">BAD</VoteContainer>
        <VoteContainer type="execution" weight="0.2" oneshot="false">NOT GOOD</VoteContainer>
        <VoteContainer type="execution" weight="0.3" oneshot="false">GOOD</VoteContainer>
      </div>
    );
  }
}

export default App;
