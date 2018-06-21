import React from 'react';

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

    axios.get(this.props.apiLocation, {
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

OpenWeather.defaultProps = {
  city: 'London',
};

export default OpenWeather;