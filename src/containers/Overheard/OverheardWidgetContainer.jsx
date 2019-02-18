import React, { Component } from 'react';
import axios from 'axios';

import Widget from '../../components/Widget';

class OverheardWidgetContainer extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    this.getData().then(_ => {
      this.interval = setInterval(this.getData, 5000);
    });
  }

  async getData() {
    const { href } = this.props;

    const resp = await axios.get(href);
    this.setState({
      text: resp.data.text
    });
  }

  render() {
    const { text } = this.state;
    return (
      <Widget heading="Overheard at ET" bkColor="blue">
        <p> {text} </p>
      </Widget>
    );
  }
}

export default OverheardWidgetContainer;
