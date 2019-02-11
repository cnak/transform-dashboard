import React from 'react';
import './StatusCard.css';
import lines from './tube-lines.json';

const getBackgroundColor = name => {
  if (lines[name]) {
    return lines[name].backgroundColor;
  }
  return '';
};

const getTextColor = name => {
  if (lines[name]) {
    return lines[name].textColor;
  }
  return '';
};

const StatusCard = ({ name, status, reason }) => (
  <div className="status-card" style={{ backgroundColor: getBackgroundColor(name.toLowerCase()) }}>
    <h2 style={{ color: getTextColor(name.toLowerCase()) }}> {name} </h2>
    <p style={{ color: getTextColor(name.toLowerCase()) }}> {status} </p>
    {reason ? (
      <p className="status-card-reason" style={{ color: getTextColor(name.toLowerCase()) }}>
        {reason}
      </p>
    ) : null}
  </div>
);

export default StatusCard;
