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
      this.interval = setInterval(this.getData, 1000);
    });
  }

  async getData() {
    const { href } = this.props;

    const resp = await axios.get(href);
    this.setState({
      text: resp.data
    });
  }

  showQuote = () => {
    const { text } = this.state;
    return <p>What part of Colombia are you from? ......I'm from Spain</p>;
  };

  render() {
    const { heading, colspan, rowspan } = this.props;
    return (
      <Widget heading="Overheard at ET" bkColor="blue" heightSize="half">
        <p> {this.showQuote()} </p>
      </Widget>
    );
  }
}

export default OverheardWidgetContainer;
