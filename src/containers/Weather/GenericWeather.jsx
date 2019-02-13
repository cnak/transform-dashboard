import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './GenericWeather.css';

function GenericWeather({ city, temp, status }) {
  const cls = cx('weather-icon', status);
  return (
    <div className="weather-card">
      <div className={cls} /> <h1> {Math.floor(temp)}º </h1> <p> {city} </p>
    </div>
  );
}

GenericWeather.propTypes = {
  city: PropTypes.string,
  temp: PropTypes.number,
  status: PropTypes.string
};

GenericWeather.defaultProps = {
  city: 'London',
  temp: 'º',
  status: 'sun'
};

export default GenericWeather;
