const vote = (state = {}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      console.log('incrementoooo');
      break;
    default:
      return state
  }
};

const votes = (state = [], action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state.map(t =>
        vote(t, action)
      )
    default:
      return state
  }
}

export default votes
