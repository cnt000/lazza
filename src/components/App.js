import React from 'react'
import { connect } from 'react-redux'
import { handleActive } from '../actions'
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Divider from 'material-ui/Divider'
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
  container: {
    width: '100%',
  }
}

const App = ({ selectedIndex, handleActive}) => {

  return (
    <Paper style={styles.container}>
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
            label="Close"
            data-route="/close"
            onActive={handleActive}
          >
            <div>
              <div>
                <h3>Team A Final Review:</h3>
              </div>
              <div style={{display:'flex'}}>
                <div>
                  <div>Execution:</div>
                  <ReviewResults type="execution-team-A" />
                </div>
                <div>
                  <div>Difficulty:</div>
                  <ReviewResults type="difficulty-team-A" />
                </div>
              </div>
            </div>
            <Divider />
            <div>
              <div>
                <h3>Team B Final Review:</h3>
              </div>
              <div style={{display:'flex'}}>
                <div>
                  <div>Execution:</div>
                  <ReviewResults type="execution-team-B" />
                </div>
                <div>
                  <div>Difficulty:</div>
                  <ReviewResults type="difficulty-team-B" />
                </div>
              </div>
              <div>
                teamwork A:
                <Total type="teamwork-team-A" startingPoint="0.0" />
                teamwork B:
                <Total type="teamwork-team-B" startingPoint="0.0" />
              </div>
              <div>
                music A:
                <Total type="music-team-A" startingPoint="0.0" />
                music B:
                <Total type="music-team-B" startingPoint="0.0" />
              </div>
              <div>
                flow A:
                <Total type="flow-team-A" startingPoint="0.0" />
                flow B:
                <Total type="flow-team-B" startingPoint="0.0" />
              </div>
              <div>
                variety A:
                <Total type="variety-team-A" startingPoint="0.0" />
                variety B:
                <Total type="variety-team-B" startingPoint="0.0" />
              </div>
              <div>
                general impression A:
                <Total type="general-impression-team-A" startingPoint="0.0" />
                general impression B:
                <Total type="general-impression-team-B" startingPoint="0.0" />
              </div>
            </div>
            <WinnerBadge />
            <SendResponseContainer>Send Final Response</SendResponseContainer>
            <div>
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
