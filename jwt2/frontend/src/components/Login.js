
import React from 'react';
import { connect } from 'react-redux'
import { loginSuccess } from '../actions/auth'


class Login extends React.Component {
  state = {
    username: 'raza',
    password: 'hello',
    error: null
  }

  handleInputChange = (e) => { 
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(this.state)
    }

    fetch('http://localhost:3000/api/v1/auth', reqObj)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        localStorage.setItem('app_token', data.token)

        this.props.loginSuccess(data.user)
        this.props.history.push('/dashboard')
      }
    })


  }


  render(){
    return (
      <div>
        <h3>Sign in</h3>
       { this.state.error && <h4 style={{ color: 'red'}}>{this.state.error}</h4> }
        <form onSubmit={this.handleSubmit}>
          <input name={'username'} onChange={this.handleInputChange} value={this.state.username} />
          <input name={'password'} onChange={this.handleInputChange} value={this.state.password} />
          <input type='submit' value='login' />
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = {
  loginSuccess
}


export default connect(null, mapDispatchToProps)(Login)

















// mapDispatchToProps under the hood:

//1)

// const mapDispatchToProps = (dispatch) => {
  // return {
    // loginSuccess: (user) => {
      // dispatch(loginSuccess(user))
    // }
  // }
// }



// 2)

// const mapDispatchToProps = (dispatch) => {
  // return {
    // loginSuccess: (user) => dispatch(loginSuccess(user))
  // }
// }























  // handleSubmit = (e) => {
    // e.preventDefault()
    // update the backend (i.e sign in the user and grabeir info from rails server)
    // update the frontend (reroute to the dashboard; update the store state w newly logged usejr)
  // }





