import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../../components/Widget';
import './Overheard.css';

class OverheardWidgetContainer extends Component {
  constructor() {
    super();

    this.state = {
      quote: ''
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    this.getData().then(_ => {
      this.interval = setInterval(this.getData, 90000);
    });
  }

  async getData() {
    const { href } = this.props;

    const now = new Date();

    if (now.getHours() > 9 && now.getHours() < 18) {
      const resp = await axios.get(href);

      this.setState({
        quote: resp.data.quote
      });
    }
  }

  render() {
    const { quote } = this.state;
    return (
      <Widget heading="Overheard at ET" bkColor="blue">
        <p className="overheard-text"> {quote} </p>
      </Widget>
    );
  }
}

export default OverheardWidgetContainer;
