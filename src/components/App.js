import React, { Component } from 'react';
import VoteButton from './VoteButton'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <VoteButton type="execution" weight="0.1" oneshot="false">BAD</VoteButton>
        <VoteButton type="execution" weight="0.2" oneshot="false">NOT GOOD</VoteButton>
        <VoteButton type="execution" weight="0.3" oneshot="false">GOOD</VoteButton>
      </div>
    );
  }
}

export default App;
