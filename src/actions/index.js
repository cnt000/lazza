
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

export const loadResult = (id) => {
  return {
    type: 'LOAD_RESULT',
    id: id
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

export function savingFinalResp(identifier) {
  return {
    type: 'SAVING_RESP',
    id: identifier,
    cb: data => console.log("pippo", data)
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


  fetch("//thbologna.it/lazza2/savefinal.php", {
      method: 'POST',
      body: "CIAO"
    })
    .then(response => response.json())
    .then(json => action.cb({json}), error => action.cb({error}))
}
