
export const REQUEST_LOADTEAMS = 'REQUEST_LOADTEAMS'
export const RECEIVE_LOADTEAMS = 'RECEIVE_LOADTEAMS'
export const FAILURE_LOADTEAMS = 'FAILURE_LOADTEAMS'
export const REQUEST_SAVE_RESULT = 'REQUEST_SAVE_RESULT'
export const SUCCESS_SAVE_RESULT = 'SUCCESS_SAVE_RESULT'
export const FAILURE_SAVE_RESULT = 'FAILURE_SAVE_RESULT'

const HEADERS_JSON = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
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

export const handleActive = (value) => {
  return {
    type: 'TAB_SELECTED_INDEX',
    value: value
  };
}


function fetchTeams(subreddit) {
  return fetch(`api/teams`)
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

function saveResults(state) {
  return fetch("/api/finalresult", {
    method: 'post',
    headers: HEADERS_JSON,
    body: JSON.stringify(state)
  })
  .then(response => response.json())
}

export function promiseSaveResult(state) {
  return {
    types: [REQUEST_SAVE_RESULT, SUCCESS_SAVE_RESULT, FAILURE_SAVE_RESULT],
    promise: saveResults(state),
    state
  };
}

export const calculateTotal = ({ votes, team }) => {
  let difficultyResult = calculatePartial({ votes, team, startingPoint: 5.0, type: 'difficulty' });
  let executionResult = calculatePartial({ votes, team, startingPoint: 10.0, type: 'execution' });
  let teamworkResult = calculatePartial({ votes, team, startingPoint: 0, type: 'teamwork' });
  let musicResult = calculatePartial({ votes, team, startingPoint: 0, type: 'music' });
  let flowResult = calculatePartial({ votes, team, startingPoint: 0, type: 'flow' });
  let varietyResult = calculatePartial({ votes, team, startingPoint: 0, type: 'variety' });
  let generalImpressionResult = calculatePartial({ votes, team, startingPoint: 0, type: 'general-impression' });

  return difficultyResult +
          executionResult +
            teamworkResult +
              musicResult +
                flowResult +
                  varietyResult +
                    generalImpressionResult;
}

function calculatePartial({ votes, team, startingPoint, type }) {
  let regex = new RegExp(`^${type}-${team}$`,'g');
  return votes.filter(obj => (regex.test(obj.id))).reduce((total, vote) => {
    return total + vote.value;
  }, parseFloat(startingPoint))
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
