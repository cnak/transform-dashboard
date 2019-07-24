import React, { Component } from 'react';
import LastUpdatedStatus from './LastUpdatedStatus';
import './Heading.css';

const displayHeading = (headingText, lastUpdatedStatusTime) => {
  if (headingText && lastUpdatedStatusTime) {
    return (
      <div>
        <LastUpdatedStatus lastUpdatedStatusTime={lastUpdatedStatusTime} />
        <h2>{headingText}</h2>
      </div>
    );
  }
  if (lastUpdatedStatusTime) {
    return <LastUpdatedStatus lastUpdatedStatusTime={lastUpdatedStatusTime} />;
  }
  if (headingText) {
    return <h2>{headingText}</h2>;
  }
  return <div />;
};

class Heading extends Component {
  shouldComponentUpdate(prevProps) {
    const { lastUpdatedStatusTime } = this.props;
    if (lastUpdatedStatusTime !== prevProps.lastUpdatedStatusTime) {
      return true;
    }
    return false;
  }

  render() {
    const { headingTitle, headingTitleColor, backgroundColor, lastUpdatedStatusTime } = this.props;
    return (
      <div
        className="widget-heading"
        style={{ width: '100%', backgroundColor, color: headingTitleColor }}
      >
        {displayHeading(headingTitle, lastUpdatedStatusTime)}
      </div>
    );
  }
}

export default Heading;
