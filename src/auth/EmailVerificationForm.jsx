/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

class EmailVerificationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verificationCode: ''
    };
  }

  onSubmit = event => {
    const { onSubmit } = this.props;
    const { verificationCode } = this.state;

    event.preventDefault();
    onSubmit(verificationCode);
  };

  changeVerificationCode = event => {
    this.setState({ verificationCode: event.target.value });
  };

  render() {
    const { error, onCancel } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div>{error}</div>
        <label>
          Verification Code
          <input placeholder="code" onChange={this.changeVerificationCode} required />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    );
  }
}

export default EmailVerificationForm;
