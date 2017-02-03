import React, { Component } from 'react';
import { loadTeams } from '../actions';
import { connect } from 'react-redux';

class SelectAsync extends Component {

  constructor(props) {
   super(props)
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(loadTeams(selectedSubreddit))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = nextProps
      dispatch(loadTeams(selectedSubreddit))
    }
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}

//export default SelectAsync;
export default connect(mapStateToProps)(SelectAsync)
