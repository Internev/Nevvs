import React from 'react'
import { connect } from 'react-redux'
import Post from './Post'

const FeedDisplay = React.createClass({
  componentDidUpdate () {
    console.log(this.props)
  },
  render () {
    return !this.props.activeFeed.posts[0]
    ? (<div className='feed-display' />)
    : (
      <div className='feed-display'>
        <h1>{this.props.activeFeed.feed}</h1>
        <Post post={this.props.activeFeed.posts[0]} />
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
