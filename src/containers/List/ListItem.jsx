import React from 'react';

import Progress from '../../elements/Progress';
import './ListItem.css';

const ListItem = ({ value, max, min, label, imageUrl }) => {
  return (
    <li className="ListItem">
      <div className="label">
        {label}
        <Progress min={min} max={max} value={value} />
      </div>
      <div className="value">
        <p>{value}</p>
      </div>
    </li>
  );
};

export default ListItem;
