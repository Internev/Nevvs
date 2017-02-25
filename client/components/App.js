import React from 'react'
// import { Route, BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import Header from './Header'
import Feeds from './Feeds'
import store from './store'

const App = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <div className='app'>
          <Header />
          <Feeds />
        </div>
      </Provider>
    )
  }
})

export default App
