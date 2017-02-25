import React from 'react'
import { addFeed } from './actionCreators'
import { connect } from 'react-redux'

const Header = React.createClass({
  handleFeedSubmit (e) {
    e.preventDefault()
    const feed = {name: this.refs.feedField.value}
    this.props.dispatch(addFeed(feed))
    this.refs.feedField.value = ''
  },
  render () {
    return (
      <div className='header'>
        <form onSubmit={this.handleFeedSubmit}>
          <input type='text' ref='feedField' />
          <input type='submit' value='Add Feed' />
        </form>
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
