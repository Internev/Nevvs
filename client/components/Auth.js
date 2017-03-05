import React from 'react'
import { connect } from 'react-redux'

const Auth = React.createClass({
  login () {
    console.log('Login attempted')
  },
  showSignup () {
    console.log('signup popo')
  },
  render () {
    return (
      <div className='auth'>
        <form onSubmit={this.login}>
          <input type='text' placeHolder='Email' />
          <input type='password' placeHolder='Password' />
          <input type='submit' /><a href='#' onClick={this.showSignup}>Sign Up?</a>
        </form>
      </div>
    )
  }
})

export default Auth
