import React from 'react';
import OpenWeather from './OpenWeather';

const WeatherWidgetContainer = ({ href, heightSize }) => {
  return <OpenWeather apiLocation={href} />;
};

export default WeatherWidgetContainer;
