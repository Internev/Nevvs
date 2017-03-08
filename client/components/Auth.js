import React from 'react'
import { connect } from 'react-redux'
import { getUser } from './actionCreators'

const Auth = React.createClass({
  componentDidUpdate () {
    console.log(this.props)
  },
  login (e) {
    let login = {
      email: this.refs.email.value,
      password: this.refs.password.value
    }
    this.props.dispatch(getUser(login))
  },
  showSignup (e) {
    e.preventDefault()
    console.log('signup popo')
  },
  render () {
    return (
      <div className='auth'>
        <form onSubmit={this.login}>
          <input type='text' ref='email' />
          <input type='password' ref='password' />
          <input type='submit' /><a href='#' onClick={this.showSignup}>Sign Up?</a>
        </form>
      </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Auth)
