import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import GalleryWidget from './GalleryWidget';

class GalleryWidgetContainer extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      imageUrl: undefined
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
    const { href } = this.props;

    this.setState({ loading: true });

    const resp = await axios.get(href);
    this.setState({
      loading: false,
      imageUrl: resp.data.imageUrl
    });
  }

  render() {
    const { heading, colspan, rowspan } = this.props;
    const { loading, imageUrl } = this.state;
    return (
      <GalleryWidget
        heading={heading}
        colspan={colspan}
        rowspan={rowspan}
        imageUrl={imageUrl}
        loading={loading}
      />
    );
  }
}

GalleryWidgetContainer.propTypes = {
  heading: PropTypes.string,
  colspan: PropTypes.number,
  rowspan: PropTypes.number,
  href: PropTypes.string.isRequired
};

GalleryWidgetContainer.defaultProps = {
  colspan: 0,
  rowspan: 0,
  heading: ''
};

export default GalleryWidgetContainer;
