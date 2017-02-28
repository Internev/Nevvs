import { ADD_FEED, IMPORT_FEEDS } from './actions'
// import axios from 'axios'
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
