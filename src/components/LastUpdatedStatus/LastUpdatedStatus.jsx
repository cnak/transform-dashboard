import React from 'react';
import './LastUpdatedStatus.css';

export default function LastUpdatedStatus(props) {
  const { lastUpdatedStatusTime, backgroundColor } = props;
  return (
    <div className="last-updated-status" style={{ background: backgroundColor }}>
      <p>{lastUpdatedStatusTime}</p>
    </div>
  );
}
