import React from 'react'
import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { USER_ID, AUTH_TOKEN  } from '../constant'

class SignupPage extends React.Component {
  state = {
    email: '',
    password: '',
    name: '',
  }

  render() {
    return (
      <div className="pa4 flex justify-center bg-white">
        <form onSubmit={this.handleSignup}>
          <h3> Already have an account!!! <a href="/login"> Login</a></h3>
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            placeholder="Name"
            type="text"
            value={this.state.name}
          />
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            placeholder="Email"
            type="email"
            value={this.state.email}
          />
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            placeholder="Enter Password"
            type="password"
            value={this.state.password}
          />
          <input
            autoFocus
            className="w-100 pa2 mv2 br2 b--black-20 bw1"
            placeholder="Confirm Password"
            type="password"
            value={this.state.title}
          />
          <input
            className={`pa3 bg-black-10 bn ${this.state.text && this.state.title && 'dim pointer'}`}
            disabled={!this.state.email || !this.state.name || !this.state.password}
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    )
  }

  handleSignup = async e => {
    e.preventDefault()
    const { email, name, password } = this.state
    localStorage.setItem('AUTH_TOKEN', AUTH_TOKEN)
    this.props.history.replace('/')
  }

}

const SIGNUP_USER = gql `
    mutation SIGNUP_Mutation($email: String!, $password: String!, $name: String!) {
      signup(email: $email, password: $password, name: $name) {
        token
        user{
          id
          name
          email
        }
      }
    }
  `

export default withRouter(SignupPage)
