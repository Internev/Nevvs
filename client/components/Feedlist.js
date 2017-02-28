import React from 'react'
import { connect } from 'react-redux'

const FeedList = React.createClass({
  render () {
    const listItems = this.props.feeds.map(feed => {
      return (
        <div key={feed.id}>
          {feed.title}
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
