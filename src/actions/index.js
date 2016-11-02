export const VOTE = 'VOTE'
export const SINGLE_VOTE = 'SINGLE_VOTE'

export const incrementVote = (vote) => {
  return {
    type: VOTE,
    vote: vote
  }
}
