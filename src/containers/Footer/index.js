import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentDate = new Date();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const pad = n => {
    return n < 10 ? `0${n}` : n;
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dateWithFullMonthName = `${monthNames[month]} ${pad(date)}, ${year}`;

  const weekday = currentDate.toLocaleDateString('en-US', { weekday: 'long' });

  const currentTime = `${currentDate.getHours()}:${currentDate.getMinutes()}`;

  return (
    <footer className="footer">
      <div className="dateTime">
        <div className="time">{currentTime}</div>
        <div className="date">
          {weekday} {dateWithFullMonthName}{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
