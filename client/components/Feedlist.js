import React from 'react'
import { connect } from 'react-redux'
import { getFeed } from './actionCreators'

const FeedList = React.createClass({
  handleFeedClick (url) {
    this.props.dispatch(getFeed(url))
  },
  render () {
    const listItems = this.props.feeds.map(feed => {
      return (
        <div key={feed.id}>
          <a href='#' onClick={() => this.handleFeedClick(feed.xmlUrl)}>{feed.title}</a>
        </div>
      )
    })

    return (
      <div className='feed-list'>
        <h1>I am feedlist</h1>
        {listItems}
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    feeds: state.feeds
  }
}

export default connect(mapStateToProps)(FeedList)
