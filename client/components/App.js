import React from 'react'
import { Match } from 'react-router'
import { Provider } from 'react-redux'
import Reader from './Reader'
import store from './store'

const App = React.createClass({
  render () {
    <Provider store={store}>
      <div className='app'>
        <Match exactly pattern='/' component={Reader} />
      </div>
    </Provider>
  }
})

export default App
