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

const StatusCard = ({ name, status, reason }) => {
  const style = { backgroundColor: getBackgroundColor(name.toLowerCase()) };

  return (
    <div className="status-card">
      <p className="line-name" style={style}>
        {name}
      </p>
      <p className="status" style={{ color: 'black' }}>
        {status}
      </p>
      {reason ? <p className="status-card-reason">{reason}</p> : null}
    </div>
  );
};

export default StatusCard;
