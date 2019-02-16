/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

class NewPasswordRequiredForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  onSubmit = event => {
    const { onSubmit } = this.props;
    const { password } = this.state;

    event.preventDefault();
    onSubmit(password);
  };

  changePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    const { error } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div>{error}</div>
        <label>
          Password
          <input placeholder="new password" onChange={this.changePassword} required />
        </label>
        <button type="submit">Set new password</button>
      </form>
    );
  }
}

export default NewPasswordRequiredForm;
