
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
