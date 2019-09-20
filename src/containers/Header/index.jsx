import React from 'react';
import './Header.scss';
import engineLogo from '../../assets/engine-logo.png';
import etDashLogo from '../../assets/et-dash-logo.png';

const Header = () => {
  return (
    <header className="app-header">
      <img className="left-logo" src={etDashLogo} alt="ET Dash" />
      <div className="right-logo">
        <img className="right-logo" src={engineLogo} alt="Engine" />
      </div>
    </header>
  );
};

export default Header;
