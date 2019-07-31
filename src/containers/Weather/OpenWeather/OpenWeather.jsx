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
      this.setState({
        name: data.name,
        temp: data.main.temp,
        description: data.weather[0].description,
        status: data.weather[0].main
      });
    });
  }

  render() {
    const { name, temp, description, status } = this.state;

    return <GenericWeather city={name} temp={temp} description={description} status={status} />;
  }
}

OpenWeather.defaultProps = {
  city: 'London'
};

export default OpenWeather;
