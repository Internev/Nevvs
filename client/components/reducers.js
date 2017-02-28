import { ADD_FEED, IMPORT_FEEDS } from './actions'
import { getIndex } from './feedIndex'

const DEFAULT_STATE = {
  feeds: []
}

const addFeed = (state, action) => {
  action.feed.id = getIndex()
  const newFeed = [...state.feeds, action.feed]
  const newState = {}
  Object.assign(newState, state, {feeds: newFeed})
  return newState
}

const importFeeds = (state, action) => {
  const newFeed = [...state.feeds, ...action.feeds]
  const newState = {}
  Object.assign(newState, state, {feeds: newFeed})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_FEED:
      return addFeed(state, action)
    case IMPORT_FEEDS:
      return importFeeds(state, action)
    default:
      return state
  }
}

export default rootReducer
