import React from 'react';

import './NumberDisplay.scss';

const NumberDisplay = ({ value }) => {
  let max = null;

  if (max !== undefined) {
    max = <span className="max">of {max}</span>;
  }

  return (
    <div className="NumberDisplay">
      <span className="value">{value}</span>
      {max}
    </div>
  );
};

export default NumberDisplay;
