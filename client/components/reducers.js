import { ADD_FEED, IMPORT_FEEDS, SHOW_FEED } from './actions'
import { getIndex } from './feedIndex'

const DEFAULT_STATE = {
  feeds: [],
  activeFeed: {
    feed: '',
    posts: []
  }
}

const addFeed = (state, action) => {
  action.feed.id = getIndex()
  const newFeed = [...state.feeds, action.feed]
  const newState = {...state, ...{feeds: newFeed}}
  return newState
}

const importFeeds = (state, action) => {
  const newFeeds = [...state.feeds, ...action.feeds]
  const newState = {...state, ...{feeds: newFeeds}}
  return newState
}

const showFeed = (state, action) => {
  const newActiveFeed = {
    feed: action.feed,
    posts: action.posts
  }
  const newState = {...state, ...{activeFeed: newActiveFeed}}
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_FEED:
      return addFeed(state, action)
    case IMPORT_FEEDS:
      return importFeeds(state, action)
    case SHOW_FEED:
      return showFeed(state, action)
    default:
      return state
  }
}

export default rootReducer
