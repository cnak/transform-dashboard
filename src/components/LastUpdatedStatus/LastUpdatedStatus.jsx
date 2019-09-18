import React from 'react';
import './LastUpdatedStatus.css';

export default function LastUpdatedStatus(props) {
  const { lastUpdatedStatusTime, backgroundColor, textColor } = props;
  return (
    <div
      className="last-updated-status"
      style={{ background: backgroundColor }}
    >
      <p style={{ color: textColor }}>{lastUpdatedStatusTime}</p>
    </div>
  );
}
