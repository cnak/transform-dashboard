import React from 'react';
import './Header.css';
import engineLogo from '../../assets/engine-logo.png';
import etDashLogo from '../../assets/et-dash-logo.png';

const Header = () => {
  return (
    <header className="app-header">
      <img className="left-logo" src={etDashLogo} alt="" />
      <img className="right-logo" src={engineLogo} alt="" />
    </header>
  );
};

export default Header;
