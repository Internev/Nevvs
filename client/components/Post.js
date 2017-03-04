import React from 'react'

const Post = React.createClass({
  componentDidUpdate () {
    console.log('Post props:', this.props)
  },
  render () {
    const { post } = this.props
    return (
      <div className='post'>
        <h3>{post.title}</h3>
        <div className='post-content'>
          {post.contentSnippet}
        </div>
      </div>
    )
  }
})

export default Post
