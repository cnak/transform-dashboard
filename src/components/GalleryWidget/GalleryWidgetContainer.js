import React, { Component } from 'react';

import axios from 'axios';
import GalleryWidget from './GalleryWidget';

class GalleryWidgetContainer extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      imageUrl: undefined,
      images: undefined
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData().then(_ => {
      this.interval =
        setInterval(this.getData, 60000);
    });
  }

  getData() {
    this.setState({ loading: true });
    return axios.get(this.props.href)
      .then(resp => {
        this.setState({
          loading: false,
          imageUrl: resp.data.imageUrl
        });
      })
  }

  render() {
    return (
      // Render the number widget
      <GalleryWidget heading={this.props.heading}
        colspan={this.props.colspan}
        rowspan={this.props.rowspan}
        imageUrl={this.state.imageUrl}
        loading={this.state.loading} />
    );
  }
}

// Enforce the type of props to send to this component
GalleryWidgetContainer.propTypes = {
  heading: React.PropTypes.string.isRequired,
  colspan: React.PropTypes.number,
  rowspan: React.PropTypes.number,
  href: React.PropTypes.string.isRequired
}

export default GalleryWidgetContainer;
