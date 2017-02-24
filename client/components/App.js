import React from 'react'
// import { Route, BrowserRouter } from 'react-router'
// import { Provider } from 'react-redux'
import Header from './Header'
import Feeds from './Feeds'

const App = React.createClass({
  render () {
    return (
      <div className='app'>
        <Header />
        <Feeds />
      </div>
    )
  }
})

export default App
