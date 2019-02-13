import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ListWidget from './ListWidget';
import './ListWidget.css';

class ListWidgetContainer extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      values: []
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    this.getData().then(_ => {
      this.interval = setInterval(this.getData, 60000);
    });
  }

  async getData() {
    this.setState({ loading: true });
    const { href } = this.props;

    try {
      const response = await axios.get(href);
      this.setState({ loading: false, values: response.data });
    } catch (error) {
      this.setState({ loading: false });
    }
  }

  render() {
    const { heading, colspan, rowspan, bkColor } = this.props;
    const { values, loading } = this.state;

    return (
      <ListWidget
        heading={heading}
        colspan={colspan}
        rowspan={rowspan}
        listItems={values}
        loading={loading}
        bkColor={bkColor}
      />
    );
  }
}

ListWidgetContainer.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  href: PropTypes.string.isRequired
};

ListWidgetContainer.defaultProps = {
  heading: 'Unnamed Widget',
  colspan: 1,
  rowspan: 1
};

export default ListWidgetContainer;
