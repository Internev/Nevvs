import React from 'react'
import FeedList from './Feedlist'
import FeedDisplay from './FeedDisplay'

const Feeds = React.createClass({
  render () {
    return (
      <div className='feeds'>
        <FeedList />
        <FeedDisplay />
      </div>
    )
  }
})

export default Feeds
