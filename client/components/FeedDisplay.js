import React from 'react'
import axios from 'axios'

const FeedDisplay = React.createClass({
  reqTest () {
    let obj = {'site': 'http://boingboing.net/feed'}
    axios.post('/internev', obj)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  },
  render () {
    return (
      <div className='feed-display'>
        <h1>I am Feed Display</h1>
        <button onClick={this.reqTest}>Request a thing</button>
      </div>
    )
  }
})

export default FeedDisplay
