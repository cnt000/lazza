import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Registration from './Registration';
import LiveJudging from './LiveJudging';
import ReviewResults from './ReviewResults/ReviewResults';
import FinalJudging from './FinalJudging';
import Total from './Total';
import WinnerBadge from './WinnerBadge';
import ResetAll from './ResetAll';
import SendResponseContainer from '../containers/SendResponseContainer';
import './App.css';

class App extends Component {

  handleInputChange(e) {
    this.forceUpdate();
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <Tabs>
          <TabList>
            <Tab>Registration</Tab>
            <Tab>Team A - Live judging</Tab>
            <Tab>Team A - Review and AI</Tab>
            <Tab>Team B - Live judging</Tab>
            <Tab>Team B - Review and AI</Tab>
            <Tab>Submit Final Vote</Tab>
          </TabList>
          <TabPanel>
            <Registration />
          </TabPanel>
          <TabPanel>
            <LiveJudging teamLetter="A" />
          </TabPanel>
          <TabPanel>
            <h2>REVIEW DIFFICULTY / EXECUTION TEAM A</h2>
            <div className="vote-row">
              <div className="playersTeamTitle">Difficulty Review:</div>
              <ReviewResults type="difficulty-team-A" />
              <br/>
              <div className="playersTeamTitle">Execution Review:</div>
              <ReviewResults type="execution-team-A" />
            </div>
            <FinalJudging teamLetter="A" />
          </TabPanel>
          <TabPanel>
            <LiveJudging teamLetter="B" />
          </TabPanel>
          <TabPanel>
            <h2>REVIEW DIFFICULTY / EXECUTION TEAM B</h2>
            <div className="vote-row">
              <div className="playersTeamTitle">Difficulty Review:</div>
              <ReviewResults type="difficulty-team-B" />
              <br/>
              <div className="playersTeamTitle">Execution Review:</div>
              <ReviewResults type="execution-team-B" />
            </div>
            <FinalJudging teamLetter="A" />
          </TabPanel>
          <TabPanel>
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
              RESET ALL DATA
              <ResetAll>Reset All Data</ResetAll>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default App;
