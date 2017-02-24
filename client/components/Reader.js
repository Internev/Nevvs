import React from 'react'
import Feedlist from './Feedlist'

const Reader = React.createClass({
  render () {
    return (
      <div className='reader'>
        <h1>I am reader</h1>
        <Feedlist />
      </div>
    )
  }
})

export default Reader
