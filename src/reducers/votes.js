
const votes = (state = {}, action) => {
  var newState;
  var existent;

  switch (action.type) {
    case 'LOAD_VOTE':
      newState = Object.assign({}, state);
      var sum = newState.judging.votes.reduce((obj, prev) => {
          return (obj.id === action.id) ? obj.value + prev : prev;
      }, 0);
      return sum;

    case 'VOTE':
      newState = Object.assign({}, state);
      var timesArr = newState.judging.votes.filter((obj) => {
        return (obj.id === action.id);
      });
      newState.judging.votes.push({
        id: action.id,
        value: action.value,
        time: timesArr.length++
      });
      return newState;

    case 'ONESHOT_VOTE':
      newState = Object.assign({}, state);
      existent = newState.judging.votes.filter((obj) => {
          return (obj.id === action.id)
      });
      if(existent.length === 0) {
          newState.judging.votes.push({id: action.id, value: action.value, time: 0});
      }  else {
          newState.judging.votes.forEach((obj) => {
              if(obj.id === action.id) {
                  obj.value = action.value;
              }
          });
      }
      return newState;

    case 'ENTRY_FIELD':
        newState = Object.assign({}, state);
        existent = newState.judging.fields.filter((obj) => {
            return (obj.id === action.id)
        });
        if(existent.length === 0) {
            newState.judging.fields.push({id: action.id, value: action.value});
        }  else {
            newState.judging.fields.forEach((obj) => {
                if(obj.id === action.id) {
                    obj.value = action.value;
                }
            });
        }
        return newState;

    case 'REMOVE_VOTE':
        newState = Object.assign({}, state);
        var filteredVotes = newState.judging.votes.filter((element) => {
          return (element.id !== action.id || element.time !== action.time)
        });
        newState.judging.votes = filteredVotes;
        return newState;

    default:
      return state;
  }
}

export default votes
