import React from 'react'
import { connect } from 'react-redux'
import { handleActive } from '../actions'
import {Tabs, Tab} from 'material-ui/Tabs'
import Paper from 'material-ui/Paper'
import Registration from './Registration'
import LiveJudging from './LiveJudging'
import FinalJudgingContainer from '../containers/FinalJudgingContainer'
import CloseVoteContainer from '../containers/CloseVoteContainer'
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
            <CloseVoteContainer />
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
