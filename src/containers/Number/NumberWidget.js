import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Widget from '../../components/Widget';
import NumberDisplay from './NumberDisplay';
import Progress from '../../elements/Progress';

import './NumberWidget.scss';

class NumberWidget extends Component {
  showWidget() {
    const { value, max } = this.props;
    if (value === undefined) {
      return <p>Loading...</p>;
    }

    return (
      <div className="NumberWidget">
        <NumberDisplay max={max} value={value} />
        {this.showProgress()}
      </div>
    );
  }

  showProgress() {
    const { min, max, value } = this.props;
    if (min !== undefined && max !== undefined && value !== undefined) {
      return <Progress min={min} max={max} value={value} />;
    }
    return null;
  }

  render() {
    const { heading, colspan, rowspan, loading } = this.props;
    return (
      <Widget
        heading={heading}
        colspan={colspan}
        rowspan={rowspan}
        loading={loading}
      >
        {this.showWidget()}
      </Widget>
    );
  }
}

NumberWidget.defaultProps = {
  heading: '',
  colspan: 0,
  rowspan: 0,
  min: 0,
  max: 0,
  value: 0
};

NumberWidget.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  loading: PropTypes.bool.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
};

export default NumberWidget;
