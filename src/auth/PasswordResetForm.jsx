/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { Link } from 'react-router-dom';

class PasswordResetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: props.username,
      code: '',
      password: '',
      message: '',
      error: ''
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { setPassword } = this.props;
    const { username, code, password } = this.state;

    setPassword(username, code, password)
      .then(() =>
        this.setState({
          message: 'Password reset',
          error: ''
        })
      )
      .catch(err =>
        this.setState({
          message: '',
          error: err.message
        })
      );
  };

  sendVerificationCode = event => {
    const { sendVerificationCode } = this.props;
    const { username } = this.state;

    event.preventDefault();
    sendVerificationCode(username)
      .then(() =>
        this.setState({
          message: 'Verification code sent',
          error: ''
        })
      )
      .catch(err => {
        if (err.code === 'UserNotFoundException') {
          this.setState({ error: 'User not found' });
        } else {
          this.setState({ error: err.message });
        }
      });
  };

  changePassword = event => {
    this.setState({ password: event.target.value });
  };

  changeCode = event => {
    this.setState({ code: event.target.value });
  };

  changeUsername = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    const { error, message, username } = this.state;
    return (
      <div>
        <div>{error}</div>
        <div>{message}</div>
        <form onSubmit={this.sendVerificationCode}>
          <label>
            Username
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={this.changeUsername}
              required
            />
          </label>
          <button type="submit">Send verification code</button>
        </form>
        <form onSubmit={this.onSubmit}>
          <label>
            Verification code
            <input placeholder="code" onChange={this.changeCode} required />
          </label>
          <label>
            Password
            <input placeholder="new password" onChange={this.changePassword} required />
          </label>
          <button type="submit">Set new password</button>
        </form>
        <Link to="/">Home</Link>
      </div>
    );
  }
}

export default PasswordResetForm;
