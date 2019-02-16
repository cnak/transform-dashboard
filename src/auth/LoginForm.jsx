import React from 'react';
import './LoginForm.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    const { email, username } = props;
    this.state = {
      email,
      username,
      password: ''
    };
  }

  onSubmitForm = event => {
    const { onSubmit } = this.props;
    const { username, password } = this.state;
    event.preventDefault();
    onSubmit(username, password);
  };

  changeUsername = event => {
    this.setState({ username: event.target.value });
  };

  changePassword = event => {
    this.setState({ password: event.target.value });
  };

  componentWillUnmount = () => {
    const { clearCache } = this.props;
    clearCache();
  };

  render() {
    const { error, email } = this.props;
    const { username } = this.state;
    return (
      <div className="login-form">
        <form onSubmit={this.onSubmitForm}>
          <div>{error}</div>
          <div>{email}</div>
          <label className="username">
            Username
            <input
              placeholder="Username"
              value={username}
              onChange={this.changeUsername}
              required
            />
          </label>
          <label className="password">
            Password
            <input placeholder="Password" onChange={this.changePassword} type="password" required />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
