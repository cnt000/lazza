import React from 'react'
import { connect } from 'react-redux'
import { handleActive } from '../actions'
import {Tabs, Tab} from 'material-ui/Tabs'
import Registration from './Registration'
import LiveJudgingContainer from '../containers/LiveJudgingContainer'
import FinalJudgingContainer from '../containers/FinalJudgingContainer'
import CloseVoteContainer from '../containers/CloseVoteContainer'
import './App.css'

const styles = {
  container: {
    width: '100%',
    fontFamily: 'Roboto'
  }
}

const App = ({ selectedIndex, handleActive}) => {

  return (
    <div style={styles.container}>
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
          <LiveJudgingContainer teamLetter="A" />
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
            <LiveJudgingContainer teamLetter="B" />
        </Tab>
        <Tab
            label="B-AI"
            data-route="/b-ai"
            onActive={handleActive}
          >
            <FinalJudgingContainer teamLetter="B" />
        </Tab>
        <Tab
            label="Send"
            data-route="/send"
            onActive={handleActive}
          >
            <CloseVoteContainer />
        </Tab>
      </Tabs>
    </div>
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
