import React from 'react';
import axios from 'axios';
import GenericWeather from '../GenericWeather';

class OpenWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      temp: null
    };

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    const interval = 60 * 100 * 60;

    // eslint-disable-next-line no-unused-vars
    this.getData().then(_ => {
      this.interval = setInterval(this.getData, interval);
    });
  }

  async getData() {
    const { apiLocation } = this.props;
    axios.get(apiLocation).then(response => {
      const { data } = response;
      this.setState({ name: data.name, temp: data.main.temp });
    });
  }

  render() {
    const { name, temp } = this.state;

    return <GenericWeather city={name} temp={temp} />;
  }
}

OpenWeather.defaultProps = {
  city: 'London'
};

export default OpenWeather;
