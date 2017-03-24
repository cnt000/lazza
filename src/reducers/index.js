import { defaultState } from '../defaultState'
import {
  REQUEST_LOADTEAMS,
  RECEIVE_LOADTEAMS,
  FAILURE_LOADTEAMS,
  REQUEST_SAVE_RESULT,
  SUCCESS_SAVE_RESULT,
  FAILURE_SAVE_RESULT,
  calculateTotal
} from '../actions'

const judginApp = (state = {}, action) => {

  switch (action.type) {

    case 'VOTE':
      var votesFiltered = selectItems(state.votes, action.id);
      let vote = {
              id: action.id,
              value: parseFloat(action.value),
              time: timeMaxId(votesFiltered) + 1
            };
      return {...state, votes: state.votes.concat(vote)};

    case 'ONESHOT_VOTE':
      let oneShotVote = {
              id: action.id,
              value: parseFloat(action.value),
              time: 1
            };
      return {...state, votes: save(state.votes, oneShotVote)};

    case 'ENTRY_FIELD':
    case 'ENTRY_PLAY':
      return {...state, fields: save(state.fields, action)};

    case 'REMOVE_VOTE':
      let filteredVotes = state.votes.filter((element) => {
        return (element.id !== action.id || element.time !== action.time)
      });
      return {...state, votes: filteredVotes};

    case 'RESET_ALL_DATA':
      return defaultState;

    case 'TAB_SELECTED_INDEX':
      return {...state, selectedIndex: action.value};

    case SUCCESS_SAVE_RESULT:
      return defaultState;

    case FAILURE_SAVE_RESULT:
      let unsavedState = Object.assign({}, state);
      unsavedState.finalResponse = {
        isSaving: false,
        savedAt: Date.now(),
        error: true
      }
      return unsavedState;

    case REQUEST_SAVE_RESULT:
      let savedState = Object.assign({}, state);
      savedState.resultA = calculateTotal({ votes: state.votes, team: 'team-A' });
      savedState.resultB = calculateTotal({ votes: state.votes, team: 'team-B' });
      savedState.finalResponse = {
        isSaving: true,
        savedAt: null,
        error: null
      }
      return savedState;

    case RECEIVE_LOADTEAMS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        teams: action.result
      });

    case REQUEST_LOADTEAMS:
      return {...state, isFetching: true, didInvalidate: false};

    case FAILURE_LOADTEAMS:
      return {...state,
        finalResponse: {
          isSaving: false,
          savedAt: Date.now(),
          error: true
        }};

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
  let isNew = (filteredList.length === 0);
  return (isNew) ? list.concat(element) : list.map((obj) =>
          (obj.id === element.id) ? element : obj
        );
}

function timeMaxId(array) {
  return array.reduce((prevVal, elm) => {
    return (prevVal > elm.time) ? prevVal : elm.time;
  }, 0);
}

export default judginApp
