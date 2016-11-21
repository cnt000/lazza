const judginApp = (state = {}, action) => {
  var newState;
  var existent;

  switch (action.type) {

    case 'VOTE':
      newState = Object.assign({}, state);
      var timesArr = newState.judging.votes.filter((obj) => {
        return (obj.id === action.id);
      });
      newState.judging.votes.push({
        id: action.id,
        value: action.value,
        time: timeMaxId(timesArr) + 1
      });
      if(typeof newState.judging.results[action.id] === 'undefined') {
        newState.judging.results[action.id] = {
          value: 0.0,
          time: 0
        };
      }
      let oldVal = newState.judging.results[action.id].value;
      let oldTime = newState.judging.results[action.id].time + 1;
      newState.judging.results[action.id] = {
        value: parseFloat(action.value, 10) + oldVal,
        time: oldTime
      };

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

      newState.judging.results[action.id] = {
        value: parseFloat(action.value, 10),
        time: 0
      };

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

    case 'ENTRY_PLAY':
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

function timeMaxId(array) {
  return array.reduce((prevVal, elm) => {
    return (prevVal > elm.time) ? prevVal : elm.time;
  }, 0);

}

export default judginApp
