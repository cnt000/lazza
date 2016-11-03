const vote = (state = {}, action) => {
  switch (action.type) {
    case 'VOTE':
      console.log('incrementoooo');
      return state
      break;
    default:
      return state
  }
};

export default vote
