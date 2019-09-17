import React from 'react';
import './ListDisplay.css';

const ListDisplay = ({ children }) => {
    return <ul className="ListDisplay">{children}</ul>;
};

export default ListDisplay;
