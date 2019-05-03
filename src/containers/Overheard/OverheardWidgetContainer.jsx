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
      this.interval = setInterval(this.getData, 60000);
    });
  }

  async getData() {
    const { href } = this.props;

    const now = new Date();

    if (now.getHours() >= 8 && now.getHours() < 19) {
      const resp = await axios.get(href);
      this.setState({
        quote: resp.data.quote
      });
    }
  }

  quoteText = quote => {
    const smallFontSize = {
      fontSize: '2em'
    };
    const largeFontSize = {
      fontSize: '4.5em'
    };

    if (quote.length < 30) {
      return (
        <p style={largeFontSize} className="overheard-text">
          {quote}
        </p>
      );
    }
    if (quote.length > 50) {
      return (
        <p style={smallFontSize} className="overheard-text">
          {quote}
        </p>
      );
    }
    return <p className="overheard-text">{quote}</p>;
  };

  render() {
    const { quote } = this.state;

    return (
      <Widget heading="Overheard at ET" bkColor="blue">
        <div className="overheard">{this.quoteText(quote)}</div>
      </Widget>
    );
  }
}

export default OverheardWidgetContainer;
