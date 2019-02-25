import React, { Component } from 'react';
import axios from 'axios';
import Widget from '../../components/Widget';
import './WifiPassword.css';

class WifiPasswordContainer extends Component {
  constructor() {
    super();

    this.state = {
      wifiPassword: ''
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line no-unused-vars
    this.getData().then(_ => {
      this.interval = setInterval(this.getData, 86400000);
    });
  }

  async getData() {
    const { href } = this.props;

    const resp = await axios.get(href);
    this.setState({
      wifiPassword: resp.data[0].wifiPassword
    });
  }

  render() {
    const { wifiPassword } = this.state;
    return (
      <Widget heading="Wifi Guest Password" bkColor="blue">
        <p className="wifi-password-text"> {wifiPassword} </p>
      </Widget>
    );
  }
}

export default WifiPasswordContainer;
