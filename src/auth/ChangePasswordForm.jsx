/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { changePassword } from 'react-cognito';

class ChangePasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      oldPassword: '',
      newPassword: ''
    };
  }

  onSubmit = event => {
    const { store } = this.context;
    const state = store.getState();
    const { user } = state.cognito;
    const { oldPassword, newPassword } = this.state;

    event.preventDefault();

    changePassword(user, oldPassword, newPassword).then(
      () => this.setState({ error: 'Password changed' }),
      error => this.setState({ error })
    );
  };

  changeOldPassword = event => {
    this.setState({ oldPassword: event.target.value });
  };

  changeNewPassword = event => {
    this.setState({ newPassword: event.target.value });
  };

  render() {
    const { error } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div>{error}</div>
        <label>
          Old Password
          <input placeholder="old password" onChange={this.changeOldPassword} required />
        </label>
        <label>
          New Password
          <input placeholder="new password" onChange={this.changeNewPassword} required />
        </label>
        <button type="submit">Set new password</button>
      </form>
    );
  }
}

export default ChangePasswordForm;
