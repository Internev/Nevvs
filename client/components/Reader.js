import React from 'react'
import Feedlist from './Feedlist'
import FeedDisplay from './FeedDisplay'

const Reader = React.createClass({
  render () {
    return (
      <div className='reader'>
        <h1>I am reader</h1>
        <Feedlist />
        <FeedDisplay />
      </div>
    )
  }
})

export default Reader
