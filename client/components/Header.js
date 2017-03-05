import React from 'react'
import { addFeed, importFeeds } from './actionCreators'
import { connect } from 'react-redux'
import { OPMLParse } from './OPMLParse'
import Auth from './Auth'

const Header = React.createClass({
  handleFeedSubmit (e) {
    e.preventDefault()
    const feed = {name: this.refs.feedField.value}
    this.props.dispatch(addFeed(feed))
    this.refs.feedField.value = ''
  },
  OPMLUpload (e) {
    let reader = new FileReader()
    reader.onload = (file) => {
      this.props.dispatch(importFeeds(OPMLParse(file.target.result)))
    }
    reader.readAsText(e.target.files[0])
  },
  render () {
    return (
      <div className='header'>
        <div className='add-feed'>
          <form onSubmit={this.handleFeedSubmit}>
            <input type='text' ref='feedField' />
            <input type='submit' value='Add Feed' />
          </form>
        </div>
        <div className='opml-upload'>
          OPML Subscription Upload: <input type='file' accept='.xml' onChange={this.OPMLUpload} />
        </div>
        <Auth />
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    feeds: state.feeds
  }
}

export default connect(mapStateToProps)(Header)
