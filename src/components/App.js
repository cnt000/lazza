import React, { Component } from 'react';
import Accordion from '../components/Accordion';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Accordion title="Team Battle" />
      </div>
    );
  }
}

export default App;
