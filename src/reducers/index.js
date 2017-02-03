import { defaultState } from '../defaultState';
import {
  REQUEST_LOADTEAMS,
  RECEIVE_LOADTEAMS,
  FAILURE_LOADTEAMS,
  REQUEST_SAVE_RESULT,
  SUCCESS_SAVE_RESULT,
  FAILURE_SAVE_RESULT
} from '../actions'

const judginApp = (state = {}, action) => {
  var newState;

  switch (action.type) {

    case 'VOTE':
      newState = {...state};
      let points = 0.0;
      if((/execution/i).test(action.id)) {
        points = 10.0;
      } else if((/difficulty/i).test(action.id)) {
        points = 5.0;
      }
      var votesFiltered = selectItems(newState.votes, action.id);
      newState.votes.push({
        id: action.id,
        value: action.value,
        time: timeMaxId(votesFiltered) + 1
      });

      if(typeof newState.results[action.id] === 'undefined') {
        newState.results[action.id] = {
          value: points,
          time: 0
        };
      }
      let oldVal = newState.results[action.id].value;
      let newTime = newState.results[action.id].time + 1;
      newState.results[action.id] = {
        value: (parseFloat(action.value, 10) + oldVal),
        time: newTime
      };

      newState.results.totalA = calculateTotal('-A', newState.results);
      newState.results.totalB = calculateTotal('-B', newState.results);

      return newState;

    case 'ONESHOT_VOTE':
      newState = {...state};
      newState.votes = save(newState.votes, action);
      newState.results[action.id] = {
                                              value: parseFloat(action.value, 10),
                                              time: 1
                                            };

      newState.results.totalA = calculateTotal('-A', newState.results);
      newState.results.totalB = calculateTotal('-B', newState.results);

      return newState;

    case 'ENTRY_FIELD':
      newState = {...state};
      newState.fields = save(newState.fields, action);
      return newState;

    case 'ENTRY_PLAY':
      newState = {...state};
      newState.fields = save(newState.fields, action);
      return newState;

    case 'REMOVE_VOTE':
      newState = Object.assign({}, state);
      var filteredVotes = newState.votes.filter((element) => {
      return (element.id !== action.id || element.time !== action.time)
      });
      newState.votes = filteredVotes;

      let oldValRemove = newState.results[action.id].value;
      let newTimeRemove = newState.results[action.id].time - 1;
      newState.results[action.id] = {
        value: oldValRemove - (parseFloat(action.value, 10)),
        time: newTimeRemove
      };

      newState.results.totalA = calculateTotal('-A', newState.results);
      newState.results.totalB = calculateTotal('-B', newState.results);

      return newState;

    case SUCCESS_SAVE_RESULT:
      newState = Object.assign({}, state);
      newState.finalResponse = {
        isSaving: false,
        savedAt: Date.now(),
        error: false
      }
      return newState;

    case FAILURE_SAVE_RESULT:
      newState = Object.assign({}, state);
      newState.finalResponse = {
        isSaving: false,
        savedAt: Date.now(),
        error: true
      }
      return newState;

    case REQUEST_SAVE_RESULT:
      newState = Object.assign({}, state);
      newState.session = action.id;
      newState.finalResponse = {
        isSaving: true,
        savedAt: null,
        error: null
      }
      return newState;

    case RECEIVE_LOADTEAMS:
      newState = Object.assign({}, state);
      newState.players = action.result;
      return Object.assign({}, newState, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt
      });

    case REQUEST_LOADTEAMS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case FAILURE_LOADTEAMS:
      newState = Object.assign({}, state);
      newState.finalResponse = {
        isSaving: false,
        savedAt: Date.now(),
        error: true
      }
      return newState;

    case 'RESET_ALL_DATA':
      return defaultState;

    default:
      return state;
  }
}

function selectItems(list, id) {
  return list.filter((obj) => {
      return (obj.id === id)
  });
}

function save(list, element) {
  let filteredList = selectItems(list, element.id);
  let time = element.time || 1;
  if(filteredList.length === 0) {
    list.push({id: element.id, value: element.value, time: time});
  } else {
    list.forEach((obj) => {
        if(obj.id === element.id) {
          obj.value = element.value;
          obj.time = element.time;
        }
    });
  }
  return list;
}

function timeMaxId(array) {
  return array.reduce((prevVal, elm) => {
    return (prevVal > elm.time) ? prevVal : elm.time;
  }, 0);
}

function calculateTotal(seed, arr) {
  let total = 0.0;
  for(var key in arr) {
    if(arr.hasOwnProperty(key)) {
      let reg = new RegExp(seed);
      if(reg.test(key)) {
        total += arr[key].value;
      }
    }
  }
  return total;
}

export default judginApp
