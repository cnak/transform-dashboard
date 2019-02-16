import React from 'react';

const LogoutButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Log out
    </button>
  );
};

export default LogoutButton;
