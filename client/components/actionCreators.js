import { ADD_FEED, IMPORT_FEEDS, GET_FEED, SHOW_FEED } from './actions'
import axios from 'axios'
//
// export function setSearchTerm (searchTerm) {
//   return { type: SET_SEARCH_TERM, searchTerm }
// }

export function addFeed (feed) {
  return { type: ADD_FEED, feed }
}

export function importFeeds (feeds) {
  return { type: IMPORT_FEEDS, feeds }
}

export function showFeed (feed, posts) {
  return { type: SHOW_FEED, feed, posts }
}

export function getFeed (feed) {
  return (dispatch, getState) => {
    axios.post('/getFeed', {'site': feed})
      .then(res => {
        dispatch(showFeed(feed, res.data.entries))
      })
      .catch(err => {
        console.error('axios error:', err)
      })
  }
}
// export function getOMDBDetails (imdbID) {
//   return (dispatch, getState) => {
//     axios.get(`http://www.omdbapi.com/?i=${imdbID}`)
//       .then(res => {
//         dispatch(addOMDBData(imdbID, res.data))
//       })
//       .catch(error => {
//         console.error('axios error', error)
//       })
//   }
// }
