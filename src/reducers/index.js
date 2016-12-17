import { defaultState } from '../defaultState';

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
      var votesFiltered = selectItems(newState.judging.votes, action.id);
      newState.judging.votes.push({
        id: action.id,
        value: action.value,
        time: timeMaxId(votesFiltered) + 1
      });

      if(typeof newState.judging.results[action.id] === 'undefined') {
        newState.judging.results[action.id] = {
          value: points,
          time: 0
        };
      }
      let oldVal = newState.judging.results[action.id].value;
      let newTime = newState.judging.results[action.id].time + 1;
      newState.judging.results[action.id] = {
        value: (parseFloat(action.value, 10) + oldVal),
        time: newTime
      };

      newState.judging.results.totalA = calculateTotal('-A', newState.judging.results);
      newState.judging.results.totalB = calculateTotal('-B', newState.judging.results);

      return newState;

    case 'ONESHOT_VOTE':
      newState = {...state};
      newState.judging.votes = save(newState.judging.votes, action);
      newState.judging.results[action.id] = {
                                              value: parseFloat(action.value, 10),
                                              time: 1
                                            };

      newState.judging.results.totalA = calculateTotal('-A', newState.judging.results);
      newState.judging.results.totalB = calculateTotal('-B', newState.judging.results);

      return newState;

    case 'ENTRY_FIELD':
      newState = {...state};
      newState.judging.fields = save(newState.judging.fields, action);
      return newState;

    case 'ENTRY_PLAY':
      newState = {...state};
      newState.judging.fields = save(newState.judging.fields, action);
      return newState;

    case 'REMOVE_VOTE':
      newState = Object.assign({}, state);
      var filteredVotes = newState.judging.votes.filter((element) => {
      return (element.id !== action.id || element.time !== action.time)
      });
      newState.judging.votes = filteredVotes;

      let oldValRemove = newState.judging.results[action.id].value;
      let newTimeRemove = newState.judging.results[action.id].time - 1;
      newState.judging.results[action.id] = {
        value: oldValRemove - (parseFloat(action.value, 10)),
        time: newTimeRemove
      };

      newState.judging.results.totalA = calculateTotal('-A', newState.judging.results);
      newState.judging.results.totalB = calculateTotal('-B', newState.judging.results);


      return newState;

    case 'SAVED_RESP':
      newState = Object.assign({}, state);
      newState.judging.finalResponse = {
        isSaving: false,
        savedAt: Date.now(),
        error: false
      }
      return newState;

    case 'SAVED_RESP_ERR':
      newState = Object.assign({}, state);
      newState.judging.finalResponse = {
        isSaving: false,
        savedAt: Date.now(),
        error: true
      }
      return newState;

    case 'SAVING_RESP':
      newState = Object.assign({}, state);
      newState.judging.session = action.id;
      newState.judging.finalResponse = {
        isSaving: true,
        savedAt: null,
        error: null
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
