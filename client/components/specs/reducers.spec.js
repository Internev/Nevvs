import reducers from '../reducers'

test('reducers', () => {
  let state
  state = reducers(undefined, {})
  expect(state).toEqual({ feeds: [], activeFeed: { feed: '', posts: [] } })
})

test('reducers', () => {
  let state
  state = reducers({feeds: [], activeFeed: {feed: '', posts: []}}, {type: 'IMPORT_FEEDS', feeds: [{text: 'Internev is Neville Challinger', title: 'Internev is Neville Challinger', type: 'rss', xmlUrl: 'http://internev.com/feed/', htmlUrl: 'http://internev.com/', id: 0}]})
  expect(state).toEqual({feeds: [{text: 'Internev is Neville Challinger', title: 'Internev is Neville Challinger', type: 'rss', xmlUrl: 'http://internev.com/feed/', htmlUrl: 'http://internev.com/', id: 0}], activeFeed: {feed: '', posts: []}})
})
