import React, { Component, PropTypes } from 'react';

import './OpenWeather.css';
import axios from 'axios';
import GenericWeather from '../GenericWeather'

class OpenWeather extends React.Component {

  constructor() {
    super();
    this.state = {
      name: null,
      temp: null,
    };
  }

  componentDidMount() {
    const { city, country, appid, units } = this.props;

    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: `${city},${country}`,
        APPID: appid,
        units,
      },
    }).then((response) => {
      const { data } = response;
      this.setState({ name: data.name, temp: data.main.temp });
    });
  }

  render() {
    const { name, temp } = this.state;

    return <GenericWeather city={name} temp={temp} />;
  }
}

OpenWeather.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string,
  appid: PropTypes.string.isRequired,
  units: PropTypes.string,
};

OpenWeather.defaultProps = {
  city: 'London',
  country: '',
  appid: '',
  units: 'metric',
};

export default OpenWeather;