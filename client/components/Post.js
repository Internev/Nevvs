import React from 'react'

const Post = React.createClass({
  componentDidUpdate () {
    console.log('Post props:', this.props)
  },
  render () {
    return (
      <div className='post'>
        <h3>{this.props.post.title}</h3>
        <div className='post-content'>
          {this.props.post.contentSnippet}
        </div>
      </div>
    )
  }
})

export default Post
