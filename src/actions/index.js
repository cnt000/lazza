
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

function savingFinalResp(identifier) {
  return {
    type: 'SAVING_RESP',
    id: identifier
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

export const sendFinalResponse = (state) => {
  let dt = new Date();
  let dateFile = dt.getFullYear() + '_' + (dt.getMonth() + 1) + '_' + dt.getDate();
  let identifier = 'lazza_data_' + dateFile + '_' + (Math.random()*1000000).toFixed(2);
  return dispatch => {
    dispatch(savingFinalResp(identifier));
    return fetch("//thbologna.it/lazza2/savefinal.php", {
      method: "POST",
      body: state
    }).then(function (result) {
      dispatch(savedResponse(identifier))
    })
    .catch (function (error) {
      dispatch(savedResponseError(identifier))
    });
  }
}
