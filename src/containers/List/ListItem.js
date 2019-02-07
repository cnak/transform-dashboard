import React from 'react';

import Progress from '../../elements/Progress';
import './ListItem.css';

const ListItem = ({ value, max, min, label }) => {
  return (
    <li className="ListItem">
      <div className="value">{value}</div>
      <div className="label">
        {label}
        <Progress min={min} max={max} value={value} />
      </div>
    </li>
  );
};

export default ListItem;
