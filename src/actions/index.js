
const SOMETHING_REQUEST = 'REQUEST_TEAMS';
const SOMETHING_SUCCESS = 'RECEIVE_TEAMS';
const SOMETHING_FAILURE = 'SOMETHING_FAILURE';

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

// function requestTeams(subreddit) {
//   return {
//     type: 'REQUEST_TEAMS',
//     subreddit
//   }
// }

// function receiveTeams(subreddit, json) {
//   return {
//     type: 'RECEIVE_TEAMS',
//     subreddit,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }

function fetchTeams(subreddit) {
  // return dispatch => {
  //   dispatch(requestTeams(subreddit))
    return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      .then(json => json.data.children.map(child => child.data))
      // .then(json => receiveTeams(subreddit, json))
  // }
}

// export function loadTeams(subreddit) {
//   return (dispatch, getState) => {
//     return dispatch(fetchTeams(subreddit))
//   }
// }

export const vote = (id, value, oneshot) => {
  let voteType = (JSON.parse(oneshot)) ? 'ONESHOT_VOTE' : 'VOTE';
  return {
    type: voteType,
    id: id,
    value: value,
    time: 0
  };
}

export function savingFinalResp(state) {
  return {
    type: 'SAVING_RESP',
    id: state,
    cb: data => console.log("pippo", data)
  }
}

export function resetAll(id) {
  return {
    type: 'RESET_ALL_DATA',
    id: id
  }
}

function savedResponse(identifier) {
  return {
    type: 'SAVED_RESP',
    id: identifier
  }
}

function savedResponseError(identifier) {
  return {
    type: 'SAVED_RESP_ERR',
    id: identifier
  }
}

export const customMiddleware = store => next => action => {
  if(action.type !== 'SAVING_RESP') return next(action);

  return fetch("savefinal.php", {
      method: 'post',
      headers: {
         'Accept': 'application/json, text/plain, */*',
         'Content-Type': 'x-www-form-urlencoded'
      },
      body: encodeURI(JSON.stringify(action.id.judging))
    })
    .then(response => response.json())
    .then(json => action.cb({json}), error => action.cb({error}))
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

// Usage
export function loadTeams(userId) {
  return {
    types: [SOMETHING_REQUEST, SOMETHING_SUCCESS, SOMETHING_FAILURE],
    promise: fetchTeams(userId),
    userId
  };
}
