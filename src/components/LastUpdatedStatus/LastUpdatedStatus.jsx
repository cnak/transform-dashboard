import React from 'react';
import './LastUpdatedStatus.css';

export default function LastUpdatedStatus(props) {
  const { time, backgroundColor } = props;
  return (
    <div className="last-updated-status" style={{ background: backgroundColor }}>
      <p>Last updated:{time}</p>
    </div>
  );
}
