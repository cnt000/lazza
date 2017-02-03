
export const REQUEST_LOADTEAMS = 'REQUEST_LOADTEAMS';
export const RECEIVE_LOADTEAMS = 'RECEIVE_LOADTEAMS';
export const FAILURE_LOADTEAMS = 'FAILURE_LOADTEAMS';
export const REQUEST_SAVE_RESULT = 'REQUEST_SAVE_RESULT';
export const SUCCESS_SAVE_RESULT = 'SUCCESS_SAVE_RESULT';
export const FAILURE_SAVE_RESULT = 'FAILURE_SAVE_RESULT';

const HEADERS_JSON = {
  'Accept': 'application/json, text/plain, */*',
  'Content-Type': 'x-www-form-urlencoded'
};

export const removeVote = (id, value, time) => {
  return {
    type: 'REMOVE_VOTE',
    id: id,
    value: value,
    time: time
  };
}

export const entryField = (id, value) => {
  return {
    type: 'ENTRY_FIELD',
    id: id,
    value: value
  };
}

export const entryPlay = (id, value) => {
  return {
    type: 'ENTRY_PLAY',
    id: id,
    value: value
  };
}

export const vote = (id, value, oneshot) => {
  let voteType = (JSON.parse(oneshot)) ? 'ONESHOT_VOTE' : 'VOTE';
  return {
    type: voteType,
    id: id,
    value: value,
    time: 0
  };
}

function fetchTeams(subreddit) {
  return fetch(`teams.json`)
  .then(response => response.json())

}

function saveResults(state) {
  debugger;
  return fetch("savefinal.php", {
    method: 'post',
    headers: HEADERS_JSON,
    body: encodeURI(JSON.stringify(state))
  })
  .then(response => response.json())
}
export function resetAll(id) {
  return {
    type: 'RESET_ALL_DATA',
    id: id
  }
}

export function loadTeams(userId) {
  return {
    types: [REQUEST_LOADTEAMS, RECEIVE_LOADTEAMS, FAILURE_LOADTEAMS],
    promise: fetchTeams(userId),
    userId
  };
}

export function promiseSaveResult(state) {
  return {
    types: [REQUEST_SAVE_RESULT, SUCCESS_SAVE_RESULT, FAILURE_SAVE_RESULT],
    promise: saveResults(state),
    state
  };
}

// Middleware
export const promiseMiddleware = () => {
  return (next) => (action) => {
    const { promise, types, ...rest } = action;
    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });
    return promise.then(
      (result) => next({ ...rest, result, type: SUCCESS }),
      (error) => next({ ...rest, error, type: FAILURE })
    );
  };
}
