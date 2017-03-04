import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const FeedDisplay = React.createClass({
  componentDidUpdate () {
    console.log(this.props)
  },
  render () {
    const { activeFeed } = this.props
    return !activeFeed.posts[0]
    ? (<div className='feed-display' />)
    : (
      <div className='feed-display'>
        <h1>{activeFeed.feed}</h1>
        <Post post={activeFeed.posts[0]} />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    activeFeed: state.activeFeed
  }
}

export default connect(mapStateToProps)(FeedDisplay)
