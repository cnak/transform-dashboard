import React, { Component } from 'react';

// Import styling
import '../styles/BirthdayDisplay.css';

class BirthdayDisplay extends Component {
  render() {
    // Only display "of xx" when a max prop is available
    let max = null;

    if (this.props.max !== undefined) {
      max = <span className="max">of {this.props.max}</span>;
    }

    return (
      <div className="BirthdayDisplay">
        <span className="birthday-heading">
          <p>{this.props.birthdayName}</p>
        </span>
        <span className="birthday-date">
          <p>{this.props.date}</p>
        </span>

        <span className="birthday-image">
          <img src={this.props.imageUrl} alt={this.props.imageUrl} />
        </span>

        {max}
      </div>
    );
  }
}

// Enforce the type of props to send to this component
BirthdayDisplay.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  imageUrl: React.PropTypes.string
};

export default BirthdayDisplay;
