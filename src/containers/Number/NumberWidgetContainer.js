import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import NumberWidget from './NumberWidget';

class NumberWidgetContainer extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      min: undefined,
      max: undefined,
      value: undefined
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData().then(() => {
      this.interval = setInterval(this.getData, 60000);
    });
  }

  async getData() {
    const { href } = this.props;
    this.setState({ loading: true });
    return axios.get(href).then(resp => {
      this.setState({
        loading: false,
        min: resp.data.min,
        max: resp.data.max,
        value: resp.data.value
      });
    });
  }

  render() {
    const { heading, colspan, rowspan } = this.props;
    const { min, max, value, loading } = this.state;

    return (
      <NumberWidget
        heading={heading}
        colspan={colspan}
        rowspan={rowspan}
        min={min}
        max={max}
        value={value}
        loading={loading}
      />
    );
  }
}

NumberWidgetContainer.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  href: PropTypes.string.isRequired
};

NumberWidgetContainer.defaultProps = {
  heading: '',
  colspan: 10,
  rowspan: 10
};

export default NumberWidgetContainer;
