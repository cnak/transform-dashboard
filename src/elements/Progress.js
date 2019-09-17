import React from 'react';
import '../styles/Progress.css';

const Progress = props => {
    let { value } = props;
    const { max, min } = props;

    if (value < min) {
        value = 0;
    } else if (value > max) {
        value = max;
    }

    const innerWidthStyle = { width: `${(value / max) * 100}%` };

    return (
        <div className="Progress">
            <div className="inner" style={innerWidthStyle} />
        </div>
    );
};

export default Progress;
