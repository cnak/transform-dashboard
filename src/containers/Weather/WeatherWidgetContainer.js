import React from 'react';

import OpenWeather from './OpenWeather';

const WeatherWidgetContainer = ({ href }) => {
  return <OpenWeather apiLocation={href} />;
};

export default WeatherWidgetContainer;
