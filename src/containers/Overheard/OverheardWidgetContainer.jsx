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
    return <p className="overheard-text">{quote}</p>;
  };

  render() {
    const { quote } = this.state;

    return (
      <Widget bkColor="white" lastUpdatedStatusTime="OVERHEARD AT ET">
        <div className="overheard">{this.quoteText(quote)}</div>
      </Widget>
    );
  }
}

export default OverheardWidgetContainer;
