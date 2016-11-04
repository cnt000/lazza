
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

export const vote = (id, value, time) => {
  return {
    type: 'VOTE',
    id: id,
    value: value,
    time: time
  };
}

export const oneshotVote = (id, value, time) => {
  return {
    type: 'ONESHOT_VOTE',
    id: id,
    value: value,
    time: time
  };
}
