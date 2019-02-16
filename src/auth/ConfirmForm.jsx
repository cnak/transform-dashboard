/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

class ConfirmForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      verificationCode: ''
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const { verificationCode } = this.state;

    onSubmit(verificationCode)
      .then(user => {
        console.log(user);
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  onResend = event => {
    const { onResend } = this.props;
    event.preventDefault();
    onResend()
      .then(user => {
        this.setState({ error: 'Code resent' });
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  changeVerificationCode = event => {
    this.setState({ verificationCode: event.target.value });
  };

  render() {
    const { error } = this.state;
    const { onCancel } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div>{error}</div>
        <label>
          Verification Code
          <input placeholder="code" onChange={this.changeVerificationCode} required />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={this.onResend}>
          Resend code
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  }
}

ConfirmForm.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onResend: PropTypes.func
};

export default ConfirmForm;
