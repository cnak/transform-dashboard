import React from 'react';
import './StatusCard.css';
import lines from './tram-lines.json';

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

const StatusCard = ({ id, name, status, reason }) => {
  const style = {
    backgroundColor: getBackgroundColor(id.toLowerCase()),
    color: getTextColor(id.toLowerCase()),
    'border-radius': '5px'
  };
  return (
    <div className="container">
      <div className="status-card">
        <p className="line-name" style={style}>
          {name}
        </p>
        <p className="status">{status}</p>
      </div>
      {reason ? (
        <div className="reason">
          <p className="message">
            <div dangerouslySetInnerHTML={{ __html: reason }} />
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default StatusCard;
