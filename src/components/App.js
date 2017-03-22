import React from 'react'
import { connect } from 'react-redux'
import { handleActive } from '../actions'
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Registration from './Registration'
import LiveJudging from './LiveJudging'
import ReviewResults from './ReviewResults/ReviewResults'
import FinalJudgingContainer from '../containers/FinalJudgingContainer'
import Total from './Total'
import WinnerBadge from './WinnerBadge'
import ResetAll from './ResetAll'
import SendResponseContainer from '../containers/SendResponseContainer'
import './App.css'

const styles = {
  layout: {
    width: '100%'
  }
}

const App = ({ selectedIndex, handleActive}) => {

  return (
    <Paper style={styles.layout}>
      <Tabs initialSelectedIndex={selectedIndex}>
        <Tab
          label="Entry"
          data-route="/entry"
          onActive={handleActive}
        >
          <Registration />
        </Tab>
        <Tab
          label="A-Live"
          data-route="/a-live"
          onActive={handleActive}
        >
          <LiveJudging teamLetter="A" />
        </Tab>
        <Tab
          label="A-AI"
          data-route="/a-ai"
          onActive={handleActive}
        >
          <FinalJudgingContainer teamLetter="A" />
        </Tab>
        <Tab
            label="B-Live"
            data-route="/b-live"
            onActive={handleActive}
          >
            <LiveJudging teamLetter="B" />
        </Tab>
        <Tab
            label="B-AI"
            data-route="/b-ai"
            onActive={handleActive}
          >
            <FinalJudgingContainer teamLetter="B" />
        </Tab>
        <Tab
            label="Review"
            data-route="/review"
            onActive={handleActive}
          >
            <div className="final-vote-row">

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
            <div className="final-vote-row">
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
            <div>
              RESET ALL DATA
              <ResetAll>Reset All Data</ResetAll>
            </div>
        </Tab>
      </Tabs>
    </Paper>
  );

};

const mapStateToProps = (state, ownProps) => {
  return {
    selectedIndex: state.selectedIndex
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleActive: (value) => {
      dispatch(handleActive(value.props.index))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
