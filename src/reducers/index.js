import { combineReducers } from 'redux'
import votes from './votes'

const judgingApp = combineReducers({
  votes
})

export default judgingApp
