import React from 'react';
import './ListDisplay.scss';

const ListDisplay = ({ children }) => {
  return <ul className="ListDisplay">{children}</ul>;
};

export default ListDisplay;
