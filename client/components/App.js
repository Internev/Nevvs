import React from 'react'
// import { Match } from 'react-router'
// import { Provider } from 'react-redux'
import Reader from './Reader'
// import store from './store'
// import { HashRouter } from 'react-router'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <h1>I am APPPPP</h1>
        <Reader />
      </div>
    )
  }
})

export default App
