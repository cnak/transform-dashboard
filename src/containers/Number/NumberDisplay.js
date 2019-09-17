import React, { Component } from 'react';

import './NumberDisplay.css';

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
