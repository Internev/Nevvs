import React from 'react'
// import { Route, BrowserRouter } from 'react-router'
// import { Provider } from 'react-redux'
import Reader from './Reader'
// import store from './store'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Reader />
      </div>
    )
  }
})

export default App
