/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { registerUser } from 'react-cognito';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      username: '',
      password: '',
      email: ''
    };
  }

  onSubmit = event => {
    const { store } = this.context;
    const state = store.getState();
    const { userPool } = state.cognito;
    const { config } = state.cognito;

    event.preventDefault();

    const { username, password, email } = this.state;
    const { history } = this.props;

    registerUser(userPool, config, username, password, {
      email
    }).then(
      action => {
        store.dispatch(action);
        history.push('/');
      },
      error => this.setState({ error })
    );
  };

  changeUsername = event => {
    this.setState({ username: event.target.value });
  };

  changePassword = event => {
    this.setState({ password: event.target.value });
  };

  changeEmail = event => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div>{error}</div>
        <label id="username">
          Username
          <input placeholder="username" onChange={this.changeUsername} required />
        </label>
        <label>
          Password
          <input placeholder="password" onChange={this.changePassword} required />
        </label>
        <label>
          Email Address
          <input placeholder="email" type="email" onChange={this.changeEmail} required />
        </label>
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default withRouter(RegisterForm);
