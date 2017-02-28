import React from 'react'
import { addFeed } from './actionCreators'
import { connect } from 'react-redux'
import { OPMLParse } from './OPMLParse'

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
      let xml = file.target.result
      OPMLParse(xml)
    }
    reader.readAsText(e.target.files[0])
  },
  render () {
    return (
      <div className='header'>
        <form onSubmit={this.handleFeedSubmit}>
          <input type='text' ref='feedField' />
          <input type='submit' value='Add Feed' />
        </form>
          OPML Subscription Upload: <input type='file' accept='.xml' onChange={this.OPMLUpload} />
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
