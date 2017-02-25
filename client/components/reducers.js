import { ADD_FEED } from './actions'

const DEFAULT_STATE = {
  feeds: []
}

let id = 0

const addFeed = (state, action) => {
  action.feed.id = id++
  const newFeed = [...state.feeds, action.feed]
  const newState = {}
  Object.assign(newState, state, {feeds: newFeed})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_FEED:
      return addFeed(state, action)
    default:
      return state
  }
}

export default rootReducer
